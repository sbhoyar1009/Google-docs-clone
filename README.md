# Google Docs Clone

Welcome to the Real-Time Google Docs Clone repository! This project is a collaborative document editing application that mimics the functionality of Google Docs. Users can create, edit, and collaborate on documents in real-time.

## Features

- **Real-Time Collaboration:** Multiple users can concurrently edit and collaborate on the same document.
- **Document Creation and Editing:** Create new documents, edit existing ones, and observe changes in real-time.
- **Rich Text Editing:** Support for formatting options such as bold, italic, underline, and more.
- **Responsive Design:** Ensures a seamless experience across various devices.
- - **Auto-delete empty docs Design:** Ensures a clean database at all times.

## Tech Stack

- **Frontend:** React with functional components,hooks and Quil Text-Editor.
- **Real-Time Communication:** Socket.io for bi-directional communication between the server and clients.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/sbhoyar1009/google-docs-clone.git
   ```

2. Install dependencies:

   ```bash
   cd google-docs-clone
   //for client
   cd client
   npm install
    //for server
   cd ../server
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

   Access the application at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the application in your web browser.
2. Create a new document or select an existing one.
3. Share the document URL with collaborators.
4. Start editing collaboratively in real-time.

## Project Structure

- **`src/`**: Contains the source code for the React application.
  - **`components/`**: React components for different parts of the application.
  - **`sockets/`**: Socket.io implementation for real-time communication.
  - **`utils/`**: Utility functions.
- **`public/`**: Public assets and the main HTML file.

## Acknowledgments

Special thanks to the creators of Google Docs for inspiration.

---

Feel free to customize this README file based on your specific project details and requirements. Update the installation instructions, features, and any other relevant information to suit the needs of your Google Docs clone built with React and Socket.io.
