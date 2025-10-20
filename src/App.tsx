import { MessageSquare, Search, Users, PlusCircle, Book, Scale, Globe, Laptop, Share2, MoreVertical, ChevronDown, Mic, ArrowUp } from 'lucide-react';

function App() {
  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl h-[90vh] bg-black rounded-2xl shadow-2xl flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-72 bg-black text-white flex flex-col border-r border-gray-800">
          {/* Logo */}
          <div className="p-4 flex items-center gap-3 border-b border-gray-800">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <span className="text-lg font-semibold">EchoAI</span>
            <button className="ml-auto p-1 hover:bg-gray-800 rounded">
              <div className="w-5 h-5 border border-gray-600 rounded"></div>
            </button>
          </div>

          {/* New Chat Button */}
          <div className="p-3">
            <button className="w-full flex items-center gap-2 px-3 py-2.5 bg-gray-900 hover:bg-gray-800 rounded-lg transition">
              <MessageSquare size={18} />
              <span className="text-sm font-medium">New chat</span>
              <span className="ml-auto text-xs bg-gray-800 px-2 py-0.5 rounded">N</span>
            </button>
          </div>

          {/* Search and Community */}
          <div className="px-3 space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-900 rounded-lg transition text-sm">
              <Search size={18} />
              <span>Search chat</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-900 rounded-lg transition text-sm">
              <Users size={18} />
              <span>Community</span>
            </button>
          </div>

          {/* Recent Chats */}
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

          {/* Trial Banner */}
          <div className="p-3 border-t border-gray-800">
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="text-sm font-medium mb-1">Your trial ends in 7 days</div>
              <div className="text-xs text-gray-400 mb-4">
                Keep enjoying unlimited chats, detailed reports, and premium AI tools without interruption.
              </div>
              <button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition">
                <ArrowUp size={16} />
                Upgrade
              </button>
            </div>
          </div>

          {/* Help Center Links */}
          <div className="px-3 py-3 space-y-1 border-t border-gray-800">
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-900 rounded-lg transition text-sm">
              <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center">
                <div className="text-xs">?</div>
              </div>
              <span>Help Center</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-900 rounded-lg transition text-sm">
              <div className="w-4 h-4">⚙️</div>
              <span>Help Center</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-900 rounded-lg transition text-sm">
              <div className="w-4 h-4">↗️</div>
              <span>Help Center</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition">
              <span className="font-medium">EchoAI 1.0</span>
              <ChevronDown size={18} />
            </button>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Share2 size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <MoreVertical size={20} />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full"></div>
            </div>
          </div>

          {/* Main Area */}
          <div className="flex-1 overflow-y-auto px-6 py-12 flex flex-col items-center justify-center">
            <div className="max-w-3xl w-full space-y-12">
              {/* Greeting */}
              <div className="text-center space-y-3">
                <h1 className="text-5xl font-bold text-black">Hello, Olivia Brooks</h1>
                <h2 className="text-4xl font-light text-gray-400">Let's make your research easier.</h2>
                <p className="text-gray-500 text-lg">Your personal AI assistant for documents, research, and knowledge.</p>
              </div>

              {/* Input Area */}
              <div className="relative">
                <div className="bg-white border border-gray-300 rounded-2xl shadow-sm">
                  <input
                    type="text"
                    placeholder="Ask Anything..."
                    className="w-full px-6 py-4 bg-transparent outline-none text-lg"
                  />
                  <div className="flex items-center gap-2 px-4 pb-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                      <PlusCircle size={20} className="text-gray-600" />
                    </button>
                    <div className="flex-1"></div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                      <Mic size={20} className="text-gray-600" />
                    </button>
                    <button className="p-2.5 bg-black hover:bg-gray-800 rounded-lg transition">
                      <ArrowUp size={20} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition cursor-pointer">
                  <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mb-4">
                    <Scale size={24} className="text-black" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Legal Insights</h3>
                  <p className="text-sm text-gray-600">Explore the latest updates and key discussions on legal topics today.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition cursor-pointer">
                  <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mb-4">
                    <Globe size={24} className="text-black" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Global Justice</h3>
                  <p className="text-sm text-gray-600">Discover important trends and changes shaping international law.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition cursor-pointer">
                  <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mb-4">
                    <Laptop size={24} className="text-black" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Modern Law & Technology</h3>
                  <p className="text-sm text-gray-600">Explore the latest updates and key discussions on legal topics today.</p>
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
