export default function Home() {
  return (
    <main className="prose mx-auto py-12">
      <h1>Dynamic Note-Taking App with Tags and Search</h1>
      <p>🎉 Congratulations! You&apos;ve made it to the 2nd step of the technical interview - building a small app to showcase your Typescript and React skills.</p>
      <p>You are tasked with making a dynamic note-taking app where users can add, delete, and search for notes based on their content and tags. This app should demonstrate your ability to handle forms, manage state, and build a responsive UI with simple search and filter functionalities.</p>

      <h2>Exact Requirements</h2>
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-row gap-x-2 items-center">
          <input id="req-1" type="checkbox" />
          <label htmlFor="req-1" className="leading-tight">
            <b>Fork this repo</b> to your own <a href="https://github.com">Github</a> account.
          </label>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <input id="req-2" type="checkbox" />
          <label htmlFor="req-2" className="leading-tight">
            Add a <b>form</b> to allow the user to add new notes with a title, body, and tags (e.g., work, personal, etc.).
          </label>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <input id="req-3" type="checkbox" />
          <label htmlFor="req-3" className="leading-tight">
            Display all notes in a <b>list</b> below the form with the title, body, and associated tags.
          </label>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <input id="req-4" type="checkbox" />
          <label htmlFor="req-4" className="leading-tight">
            Implement a <b>delete button</b> next to each note that removes it from the list.
          </label>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <input id="req-5" type="checkbox" />
          <label htmlFor="req-5" className="leading-tight">
            Add a <b>search bar</b> that allows users to filter notes by title or content.
          </label>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <input id="req-6" type="checkbox" />
          <label htmlFor="req-6" className="leading-tight">
            Add <b>tag filtering</b> functionality that allows users to filter notes based on tags.
          </label>
        </div>
      </div>

      <h2>Additional Requirements</h2>
      <p>The following additional requirements should be met:</p>
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-row gap-x-2 items-center">
          <input id="setting-1" type="checkbox" />
          <label htmlFor="setting-1" className=" leading-tight">
            Ensure that the app&apos;s <b>state persists</b> between page reloads (using localStorage or another method).
          </label>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <input id="setting-2" type="checkbox" />
          <label htmlFor="setting-2" className=" leading-tight">
            The app should be <b>responsive</b> and usable on both desktop and mobile devices.
          </label>
        </div>
      </div>

      <h2>Example Note</h2>
      <p>
        Title: &quot;Buy groceries&quot; <br />
        Tags: &quot;personal&quot; <br />
        Body: &quot;Remember to buy milk, bread, and eggs.&quot;
      </p>
    </main>
  );
}
