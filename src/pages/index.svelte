<script>
  import Heading from "../components/Heading.svelte";
</script>

<body
  class="text-gray-200 
bg-gradient-to-t md:bg-gradient-to-t from-gray-900 to-cyan-900 min-h-screen"
>
  <header class="max-w-6xl mx-auto sm:px-5 py-12">
    <div class="text-center">
      <Heading
        class="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl"
      >
        <img
          src="images/logo.svg"
          alt="Rotko Networks"
          width="450px"
          height="125px"
          class="mx-auto max-w-450px w-10/12 sm:w-8/12 md:w-6/12 mb-4 text-shadow-xl"
        />
      </Heading>
      <p
        class="text-bold text-sm sm:text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"
      >
        Security without obscurity
      </p>
      <p />
      <div class="flex mt-6 justify-center">
        <div class="w-42 h-1 rounded-full bg-indigo-300 inline-flex" />
      </div>
    </div>
  </header>
  <main>
    <div class="flex flex-wrap w-10/12 md:w-full lg:w-11/12 xl:w-10/12 mx-auto">
      <div class=" md:w-1/3 md:mb-0 mb-6 flex flex-col md:pl-10 md:pr-5">
        <div
          class="rounded-t-3xl md:rounded-tr-none rounded-bl-none md:rounded-l-3xl 
          bg-gradient-to-b md:bg-gradient-to-r from-gray-800 to-cyan-800
          p-4 lg:opacity-85 lg:hover:opacity-95 shadow-2xl"
        >
          <div
            class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 
                2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
          <div class="min-h-32 md:min-h-56 xl:min-h-48">
            <h2 class=" text-xl title-font font-medium mb-3">Webdesign</h2>
            <p class="leading-relaxed text-sm text-justify">
              We have over 15 years of experience designing web pages for very
              wide purposes. Using Figma we can deliver specialized design that
              is the right fit for your branding.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-1/3 md:mb-0 mb-6 flex flex-col md:px-0">
        <div
          class="rounded bg-cyan-800 p-4 
        shadow-3xl lg:opacity-85 lg:hover:opacity-95"
        >
          <div
            class="w-10 h-10 inline-flex items-center justify-center rounded-full 
            bg-blue-100 text-blue-500 mb-5 flex-shrink-0"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <div class="min-h-32 md:min-h-56 xl:min-h-48">
            <h2 class=" text-xl title-font font-medium mb-3">
              Web integration
            </h2>
            <p class="leading-relaxed text-sm text-justify">
              We are capable of delivering any drawn webdesign programmed using
              latest CSS and JS frameworks to bring your website alive. We are
              specialized for using latest frontend technology to treeshake
              extra weight out of code delivering extremely fast loading times.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-1/3 md:mb-0 mb-6 flex flex-col md:pl-5 md:pr-10">
        <div
          class="rounded-b-3xl md:rounded-bl-none rounded-tr-none md:rounded-r-3xl
           bg-gradient-to-t md:bg-gradient-to-l from-gray-800 to-cyan-800
            p-4 shadow-3xl  lg:opacity-85 lg:hover:opacity-95"
        >
          <div
            class="w-10 h-10 inline-flex items-center justify-centr rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0"
          >
            <svg
              class="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              /></svg
            >
          </div>
          <div class="min-h-32 md:min-h-56 xl:min-h-48">
            <h2 class=" text-xl title-font font-medium mb-3">
              Backend development
            </h2>
            <p class="leading-relaxed text-sm text-justify">
              Thanks to PHP and frameworks like Laravel, Slim and Symphony we
              are capable of delivering dynamic websites, where data is safely
              saved in the server side database.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap w-10/12 md:w-full lg:w-11/12 xl:w-10/12 mx-auto justify-center"
    >
      <div
        class="my-5 mb-10 md:mb-0 md:my-10 md:w-8/12 lg:w-6/12 m-0 md:m-10
         rounded-3xl bg-gradient-to-b from-cyan-800 to-gray-800
         shadow-3xl  lg:opacity-85 lg:hover:opacity-95"
      >
        <form action="" class="form p-6 relative">
          <div
            class="icon bg-cyan-600 text-white w-6 h-6 absolute flex items-center justify-center p-5"
            style="left:-40px"
          >
            C
          </div>
          <h3 class="text-2xl text-gray-100 font-semibold">Let us call you!</h3>
          <p class="text-gray-200">
            To make you an offer for website of your dreams.
          </p>
          <div class="text-black">
            <div class="flex space-x-5 mt-3">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Name"
                class="border p-2  w-1/2"
              />
              <input
                type="tel"
                name=""
                id=""
                placeholder="Your Number"
                class="border p-2 w-1/2"
              />
            </div>
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              class="border p-2 w-full mt-3"
            />
            <textarea
              name=""
              id=""
              cols="10"
              rows="3"
              placeholder="Tell us about desired web application"
              class="border p-2 mt-3 w-full "
            />
          </div>

          <p class="font-bold text-sm mt-3">GDPR Agreement *</p>
          <div class="flex items-baseline space-x-2 mt-2">
            <input type="checkbox" name="gpdr" id="" class="inline-block" />
            <label for="gpdr">
              <p class="text-gray-200 text-sm">
                I consent to having this website store my submitted information
                so they can respond to my inquiry.
              </p>
            </label>
          </div>
          <input
            type="submit"
            value="Submit"
            class="w-full mt-3 bg-cyan-700 hover:bg-cyan-600 text-white font-semibold p-3"
          />
        </form>
      </div>
    </div>
  </main>
</body>

<style>
  .icon::after {
    content: "";
    display: block;
    position: absolute;
    border-top: 23px solid transparent;
    border-bottom: 17px solid transparent;
    border-left: 12px solid #3182ce;
    left: 100%;
    top: 0;
  }
</style>
