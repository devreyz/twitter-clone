import {
  Bell,
  Bookmarks,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Sparkle,
  User,
} from "phosphor-react";
import logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <div className="layout mx-auto max-w-6xl grid grid-cols-[300px_1fr]">
        <aside className="sidebar py-6 px-5 flex flex-col gap-8">
          <img className="size-8 " src={logo} alt="Logo" />
          <nav>
            <a className="text-primary" href="">
              <House weight="fill" /> Home
            </a>
            <a href="">
              <Hash /> Explorer
            </a>
            <a href="">
              <Bell /> Notifications
            </a>
            <a href="">
              <Envelope />
              Message
            </a>
            <a href="">
              <Bookmarks />
              BookMarks
            </a>
            <a href="">
              <FileText />
              Lists
            </a>
            <a href="">
              <User />
              Profile
            </a>
            <a href="">
              <DotsThreeCircle />
              More
            </a>
          </nav>
          <button className="bg-primary rounded-full p-4 flex justify-center text-center  w-full text-white font-bold hover:brightness-95">
            Tweet
          </button>
        </aside>
        <div className="content border-x-border border-x">
          <main className="content">
            <div className="timeline-header">
              Home
              <Sparkle />
            </div>

            <form className="newtweet-form">
              <label htmlFor="Tweet">
                <img
                  src="https://github.com/devreyz.png"
                  alt="Imagemperfil de usuário"
                />
                <textarea
                  className="resize-none"
                  id="tweet"
                  placeholder="What's happening!"
                ></textarea>
              </label>
              <button>Tweet</button>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
