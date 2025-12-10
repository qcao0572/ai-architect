# AI Chat - ChatGPT Clone

A beautiful ChatGPT-like interface built with Next.js, TypeScript, and Tailwind CSS. This application allows you to chat with AI models using the AI Builder's API, specifically configured to use the Grok-4-fast model.

## Features

- 🎨 **ChatGPT-like UI**: Clean, modern interface with a sidebar for conversations and a main chat area
- 💬 **Multiple Conversations**: Create, manage, and switch between multiple chat conversations
- 💾 **Local Storage**: Conversations are automatically saved to your browser's local storage
- 🤖 **AI Integration**: Powered by AI Builder's API with Grok-4-fast model
- ⚡ **Real-time Chat**: Send messages and receive AI responses in real-time
- 🎯 **Auto-titling**: Conversations are automatically titled based on the first message

## Getting Started

### Prerequisites

- Node.js 18+ installed
- AI Builder API token (already configured in `.env.local`)

### Installation

1. Install dependencies:
```bash
npm install
```

2. The `.env.local` file is already configured with your AI Builder token.

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Start a New Chat**: Click the "New chat" button in the sidebar
2. **Send Messages**: Type your message in the input field and press Enter or click Send
3. **Switch Conversations**: Click on any conversation in the sidebar to switch between chats
4. **Delete Conversations**: Hover over a conversation and click the trash icon to delete it

## Project Structure

```
app/
  ├── api/
  │   └── chat/
  │       └── route.ts          # API route for chat completions
  ├── components/
  │   ├── Sidebar.tsx           # Left sidebar with conversations list
  │   └── ChatInterface.tsx     # Main chat interface
  ├── types/
  │   └── index.ts              # TypeScript type definitions
  ├── layout.tsx                # Root layout
  ├── page.tsx                  # Main page component
  └── globals.css               # Global styles
```

## API Configuration

The application uses the AI Builder's API with the following configuration:
- **Base URL**: `https://space.ai-builders.com/backend/v1`
- **Model**: `grok-4-fast`
- **Authentication**: Bearer token via `AI_BUILDER_TOKEN` environment variable

## Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **OpenAI SDK**: For API communication (OpenAI-compatible)
- **Lucide React**: Icon library

## License

MIT
