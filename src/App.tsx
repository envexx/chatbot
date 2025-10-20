import { useState, useEffect, useRef } from 'react';
import { MessageSquare, Search, Wallet, ChevronDown, ArrowUp } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  created_at: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef('session_' + Date.now());

  useEffect(() => {
    loadMessages();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('session_id', sessionId.current)
      .order('created_at', { ascending: true });

    if (!error && data) {
      setMessages(data);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    const { data: userMsg, error: userError } = await supabase
      .from('messages')
      .insert({
        content: userMessage,
        role: 'user',
        session_id: sessionId.current
      })
      .select()
      .single();

    if (!userError && userMsg) {
      setMessages(prev => [...prev, userMsg]);
    }

    setTimeout(async () => {
      const assistantResponse = `Thank you for your message: "${userMessage}". This is a demo AI response.`;

      const { data: assistantMsg, error: assistantError } = await supabase
        .from('messages')
        .insert({
          content: assistantResponse,
          role: 'assistant',
          session_id: sessionId.current
        })
        .select()
        .single();

      if (!assistantError && assistantMsg) {
        setMessages(prev => [...prev, assistantMsg]);
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const startNewChat = () => {
    sessionId.current = 'session_' + Date.now();
    setMessages([]);
  };

  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full h-full bg-black flex overflow-hidden">
        <div className="w-72 bg-black text-white flex flex-col border-r border-gray-800">
          <div className="p-4 flex items-center gap-3 border-b border-gray-800">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <span className="text-lg font-semibold">EchoAI</span>
            <button className="ml-auto p-1 hover:bg-gray-800 rounded">
              <div className="w-5 h-5 border border-gray-600 rounded"></div>
            </button>
          </div>

          <div className="p-3">
            <button
              onClick={startNewChat}
              className="w-full flex items-center gap-2 px-3 py-2.5 bg-gray-900 hover:bg-gray-800 rounded-lg transition"
            >
              <MessageSquare size={18} />
              <span className="text-sm font-medium">Chat</span>
            </button>
          </div>

          <div className="px-3 space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-900 rounded-lg transition text-sm">
              <Search size={18} />
              <span>My Asset</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-900 rounded-lg transition text-sm">
              <Wallet size={18} />
              <span>Protocol</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-4">
            <div className="text-xs text-gray-500 mb-2 px-3">Recent</div>
            <div className="space-y-1">
              <button className="w-full text-left px-3 py-2 hover:bg-gray-900 rounded-lg transition text-sm text-gray-300 truncate">
                Quick access to your lates...
              </button>
              <button className="w-full text-left px-3 py-2 hover:bg-gray-900 rounded-lg transition text-sm text-gray-300 truncate">
                Pick up right where you le...
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-white">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition">
              <span className="font-medium">EchoAI 1.0</span>
              <ChevronDown size={18} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg transition">
              <Wallet size={18} />
              <span className="font-medium">Connect Wallet</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center">
                <div className="max-w-3xl w-full space-y-8 text-center">
                  <div className="space-y-3">
                    <h1 className="text-5xl font-bold text-black">Hello, Olivia Brooks</h1>
                    <h2 className="text-4xl font-light text-gray-400">Let's make your research easier.</h2>
                    <p className="text-gray-500 text-lg">Your personal AI assistant for documents, research, and knowledge.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                        message.role === 'user'
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-black'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl px-6 py-4 bg-gray-100">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          <div className="px-6 py-6 border-t border-gray-200">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white border border-gray-300 rounded-2xl shadow-sm">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Anything..."
                  className="w-full px-6 py-4 bg-transparent outline-none text-lg"
                  disabled={isLoading}
                />
                <div className="flex items-center justify-end gap-2 px-4 pb-4">
                  <button
                    onClick={sendMessage}
                    disabled={!input.trim() || isLoading}
                    className="p-2.5 bg-black hover:bg-gray-800 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowUp size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
