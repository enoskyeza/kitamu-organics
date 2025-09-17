import {MessageCircle} from "lucide-react";

export default function WhatsappChatButton () {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/256782976755"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="ml-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us
          </span>
        </a>
      </div>
    )
}