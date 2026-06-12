# Mini Message Board

A simple, lightweight message board application built with Node.js and Express. Users can view messages from other users, create new messages, and view detailed information about each message.

## 📋 Features

- **View Messages**: Display all messages on the home page with user information and timestamps
- **Create Messages**: Add new messages by providing a username and message text
- **Message Details**: View detailed information about each message
- **Clean UI**: Responsive and styled interface with separate stylesheets for different pages
- **In-Memory Storage**: Messages are stored in memory (no database required)

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Templating Engine**: EJS (v6.0.1)
- **Styling**: CSS

## 📁 Project Structure

```
Mini-Message-Board/
├── app.js                    # Main application entry point
├── package.json              # Project dependencies and scripts
├── routes/
│   └── index.js             # Route definitions
├── controllers/
│   └── indexController.js   # Controller logic (placeholder)
├── views/
│   ├── index.ejs            # Home page - displays all messages
│   ├── form.ejs             # Form page - create new message
│   └── details.ejs          # Details page - view message information
├── public/
│   ├── style.css            # Main stylesheet for home page
│   ├── form.styles.css      # Stylesheet for form page
│   └── details.styles.css   # Stylesheet for details page
└── README.md                # This file
```

## 🚀 Installation

1. **Clone or download the project**:

   ```bash
   cd Mini-Message-Board
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🎯 Usage

1. **Start the server**:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`

2. **Access the application**:
   - Open your browser and navigate to `http://localhost:3000`
   - You'll see the message board with existing messages

3. **Create a new message**:
   - Click the "Send a message" link
   - Enter your name and message text
   - Click "Send" to post the message
   - You'll be redirected back to the home page

4. **View message details**:
   - Click the "Open" link on any message
   - View the full details including username, message text, and timestamp

## 📍 Routes

| Route      | Method | Description                                                              |
| ---------- | ------ | ------------------------------------------------------------------------ |
| `/`        | GET    | Display all messages                                                     |
| `/new`     | GET    | Display the form to create a new message                                 |
| `/new`     | POST   | Submit a new message                                                     |
| `/details` | GET    | Display details for a specific message (accepts `index` query parameter) |

## 📝 Message Object

Each message contains the following properties:

```javascript
{
  text: String,        // The message content
  user: String,        // Username of the message author
  added: Date          // Timestamp when the message was created
}
```

## 💡 How It Works

1. **Initial State**: The application starts with two sample messages in memory
2. **Displaying Messages**: The `/` route renders the home page with all messages
3. **Creating Messages**: The form collects user input and sends a POST request to `/new`
4. **Storing Messages**: New messages are added to the in-memory array
5. **Viewing Details**: Each message can be clicked to view its full details

## ⚙️ Configuration

- **Port**: The server listens on port `3000` (can be modified in [app.js](app.js))
- **View Engine**: EJS is configured as the templating engine
- **Static Files**: CSS and other assets are served from the `public` directory

## 📚 Dependencies

- **express**: Web framework for Node.js
- **ejs**: Templating engine for rendering HTML views

## 🔄 Message Flow

```
User visits /
  ↓
Display all messages with "Send a message" link
  ↓
User clicks "Send a message"
  ↓
Display form (/new GET)
  ↓
User submits form
  ↓
Message saved to array (/new POST)
  ↓
Redirect to home page
  ↓
New message appears in list
```

## 🎨 Styling

- **style.css**: Main page styling for message display
- **form.styles.css**: Form page styling
- **details.styles.css**: Details page styling

Each view uses its own stylesheet for better organization and maintainability.

## 🚧 Future Enhancements

- Add database persistence (MongoDB, PostgreSQL, etc.)
- Implement user authentication
- Add message editing and deletion features
- Add search and filter functionality
- Implement pagination for large message lists
- Add image/file upload support
- Add timestamps in readable format with time-ago display
- Implement dark mode

## 📌 Notes

- Messages are stored in memory, so they will be lost when the server restarts
- The controller file ([controllers/indexController.js](controllers/indexController.js)) is currently a placeholder and can be utilized for better code organization
- This project is part of The Odin Project curriculum

## 👨‍💻 Getting Started

To run this project:

```bash
# Install dependencies
npm install

# Start the server
npm start

# Open http://localhost:3000 in your browser
```

That's it! The message board is ready to use.
