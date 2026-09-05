import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Search, Trash2, MailOpen, Mail } from 'lucide-react';
import { toast } from 'react-toastify';

const MessagesView = () => {
  const { data, updateMessage, deleteMessage } = usePortfolio();
  const messages = data.messages || [];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDesc, setSortDesc] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const filteredMessages = messages
    .filter(m => 
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      m.subject.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortDesc ? dateB - dateA : dateA - dateB;
    });

  const handleToggleRead = (id, currentStatus) => {
    updateMessage(id, { read: !currentStatus });
  };

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete this message?')) {
      deleteMessage(id);
      setSelectedMessage(null);
      toast.info('Message deleted');
    }
  };

  const handleViewMessage = (msg) => {
    setSelectedMessage(msg);
    if (!msg.read) {
      updateMessage(msg.id, { read: true });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-[calc(100vh-140px)]">
      {/* List Panel */}
      <div className={`w-full ${selectedMessage ? 'hidden md:flex' : 'flex'} md:w-1/3 flex-col bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm h-full`}>
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold mb-4">Messages</h2>
          <div className="relative mb-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search messages..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>
          <button onClick={() => setSortDesc(!sortDesc)} className="text-xs text-brand-blue font-medium hover:underline">
            Sort by Date ({sortDesc ? 'Newest' : 'Oldest'})
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {filteredMessages.length > 0 ? (
            filteredMessages.map(msg => (
              <div 
                key={msg.id} 
                onClick={() => handleViewMessage(msg)}
                className={`p-4 border-b border-slate-100 dark:border-slate-700/50 cursor-pointer transition-colors ${selectedMessage?.id === msg.id ? 'bg-blue-50 dark:bg-slate-700' : 'hover:bg-slate-50 dark:hover:bg-slate-800/80'} ${!msg.read ? 'border-l-4 border-l-brand-blue' : 'border-l-4 border-l-transparent'}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className={`font-medium ${!msg.read ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>{msg.name}</span>
                  <span className="text-xs text-slate-400">{new Date(msg.date).toLocaleDateString()}</span>
                </div>
                <p className={`text-sm mb-1 truncate ${!msg.read ? 'font-semibold text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-400'}`}>{msg.subject}</p>
                <p className="text-xs text-slate-500 truncate">{msg.message}</p>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-500">No messages found.</div>
          )}
        </div>
      </div>

      {/* Detail Panel */}
      <div className={`w-full ${!selectedMessage ? 'hidden md:flex' : 'flex'} md:w-2/3 flex-col bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm h-full`}>
        {selectedMessage ? (
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-start">
              <div className="flex-1 mr-4">
                <button onClick={() => setSelectedMessage(null)} className="md:hidden text-sm text-brand-blue mb-4 hover:underline">&larr; Back to list</button>
                <h3 className="text-2xl font-bold mb-2">{selectedMessage.subject}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold">{selectedMessage.name}</span>
                    <span className="text-slate-500 text-sm ml-2">&lt;{selectedMessage.email}&gt;</span>
                  </div>
                  <span className="text-sm text-slate-500">{new Date(selectedMessage.date).toLocaleString()}</span>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button 
                  onClick={() => handleToggleRead(selectedMessage.id, selectedMessage.read)}
                  className="p-2 text-slate-500 hover:text-brand-blue hover:bg-blue-50 dark:hover:bg-slate-700 rounded transition-colors"
                  title={selectedMessage.read ? "Mark as unread" : "Mark as read"}
                >
                  {selectedMessage.read ? <Mail size={18} /> : <MailOpen size={18} />}
                </button>
                <button 
                  onClick={() => handleDelete(selectedMessage.id)}
                  className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-slate-700 rounded transition-colors"
                  title="Delete message"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <div className="p-6 flex-1 overflow-y-auto whitespace-pre-wrap text-slate-700 dark:text-slate-300">
              {selectedMessage.message}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-8 text-center">
            <MessageSquare size={48} className="mb-4 opacity-50" />
            <p>Select a message to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesView;
