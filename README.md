# 🪄 Vanishio

**Step into a secret space where words vanish like magic.**

Vanishio is an ephemeral chat application where conversations exist only for a moment before disappearing forever. Create temporary chat rooms, share secrets, and watch your words vanish into the void.

## ✨ Features

- **🎭 Anonymous Identity** - Auto-generated Harry Potter-esque usernames for every visitor
- **🚪 Create & Join Rooms** - Start your own secret space or join existing ones with a Room ID
- **⏰ Self-Destructing Rooms** - All rooms automatically vanish after 10 minutes
- **⚡ Magical Destruction** - Invoke the spell "Avada Kedavra" to instantly destroy a room
- **🔒 Complete Privacy** - No registration, no history, no traces

## 🎮 How to Use

### Creating a Room
1. Open Vanishio
2. Click "Create Room"
3. Share the generated Room ID with others
4. Start chatting anonymously

### Joining a Room
1. Get a Room ID from someone
2. Enter the Room ID
3. Click "Join Room"
4. You're in!

### Chatting
- Type your message and send
- All participants see messages in real-time
- Your auto-generated username appears with each message

### Destroying a Room
You can end a room in two ways:
- **Automatic**: Wait 10 minutes - the room self-destructs
- **Manual**: Click "💣 DESTROY" in the top right to instantly destroy the room or invoke the infamous killing curse `avada kedavra`

## 🔮 Username Format

Usernames are automatically generated in a magical Harry Potter style:
```
Albus-Dumbledore-x9k2
Sirius-Black-m4p7
Luna-Lovegood-q3n8
```

## 🛡️ Privacy & Security

- **No Data Persistence**: Messages are never stored permanently
- **Anonymous by Default**: No accounts or personal information required
- **Temporary Existence**: All rooms disappear after 10 minutes maximum
- **No Recovery**: Once destroyed, rooms and messages are gone forever

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🧙 Tech Stack

- **Next.js 16** - React framework with App Router
- **Upstash Realtime** - Real-time pub/sub messaging
- **Upstash Redis** - Ephemeral data storage
- **Elysia** - Fast and elegant API framework
- **TanStack Query** - Data fetching and state management
- **Tailwind CSS 4** - Utility-first styling
- **TypeScript** - Type-safe development
- **Zod** - Runtime type validation
- **nanoid** - Unique identifier generation
- **date-fns** - Date manipulation utilities

## ⚠️ Important Notes

- Rooms are **truly ephemeral** - no backups, no recovery
- The 10-minute timer starts when the room is created
- Once you leave or close the tab, you cannot rejoin the same room
- Use responsibly and respect others' privacy

## 📜 License

MIT License - Use it, modify it, share it!

---

**Remember**: In Vanishio, nothing lasts forever. Speak freely, for your words will soon vanish like magic. ✨
