'use client';

import { Plus, MessageSquare, Trash2 } from 'lucide-react';
import { Conversation } from '../types';

interface SidebarProps {
  conversations: Conversation[];
  currentConversationId: string | null;
  onNewConversation: () => void;
  onSelectConversation: (id: string) => void;
  onDeleteConversation: (id: string) => void;
}

export default function Sidebar({
  conversations,
  currentConversationId,
  onNewConversation,
  onSelectConversation,
  onDeleteConversation,
}: SidebarProps) {
  return (
    <div className="flex h-screen w-64 flex-col bg-gray-900 text-white">
      <div className="flex-1 overflow-y-auto p-2">
        <button
          onClick={onNewConversation}
          className="flex w-full items-center gap-3 rounded-lg border border-white/20 px-3 py-3 text-sm transition-colors hover:bg-gray-800"
        >
          <Plus size={16} />
          New chat
        </button>
        
        <div className="mt-2">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                currentConversationId === conv.id
                  ? 'bg-gray-800'
                  : 'hover:bg-gray-800/50'
              }`}
            >
              <MessageSquare size={16} className="flex-shrink-0" />
              <button
                onClick={() => onSelectConversation(conv.id)}
                className="flex-1 truncate text-left"
              >
                {conv.title}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteConversation(conv.id);
                }}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Trash2 size={14} className="text-gray-400 hover:text-red-400" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

