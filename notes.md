BTN elements in a div
inline-block
px-
py-
shadow-
bg-color-
text-color
text-size
uppercase
letter-spacing/leading
tracking

SYDTEM
font-size
font-weight
line-height
color
margin
padding
width
height
box-shadows
border-radius
border-width
opacity

<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body class="">
    <!-- Main Header Container -->

    <header
      class="fixed top-0 z-50 h-20 w-full bg-gray-800 transition-all duration-300 ease-in-out"
    >
      <nav
        id="navbar"
        class="h-full bg-gray-800 px-2 transition-all duration-300 ease-in-out"
      >
        <div class="flex h-full items-center justify-between px-4">
          <!-- Logos -->
          <div class="flex space-x-2">
            <!-- Main Logo -->
            <!-- <a href="/">
              <img
                id="main-logo"
                class="h-10 w-10 text-white transition-all duration-300 ease-in-out"
                src="./images/logo-1.svg"
                alt="Main Logo"
              />
            </a> -->

            <!-- Secondary Logo (Hidden initially) -->
            <!-- <a href="/">
              <img
                id="secondary-logo"
                class="hidden h-8 w-8 transition-all duration-300 ease-in-out"
                src="./images/1.jpg"
                alt="Secondary Logo"
              />
            </a> -->
          </div>

          <!-- Desktop Navigation Links -->
          <div
            id="nav-links"
            class="hidden grid-flow-col items-center gap-4 md:grid"
          >
            <!-- Desktop Nav -->
            <a href="/" class="text-white">Home</a>
            <a href="about.html" class="text-white">About</a>
            <a href="#" class="text-white">Services</a>
            <a href="#" class="text-white">Contact</a>
          </div>

          <!-- Mobile Navigation -->
          <div id="hamburger" class="md:hidden">
            <!-- Mobile Menu Toggle Button -->
            <button class="hamburger z-100">
              <span class="hamburger-top"></span>
              <span class="hamburger-middle"></span>
              <span class="hamburger-bottom"></span>
            </button>
          </div>
        </div>
        <!-- /Container -->
      </nav>
      <!-- /Navbar -->
      <!-- Mobile Menu (hidden initially) MUST BE PLACE INSIDE HEADER BUT OUTSIDE OF NAV -->
      <div
        id="mobile-menu"
        class="fixed left-0 top-[80px] z-10 hidden h-screen w-full bg-gray-800 text-white md:hidden"
      >
        <ul class="space-y-4 p-8">
          <li><a href="/" class="nav-link">Home</a></li>
          <li><a href="about.html" class="nav-link">About</a></li>
          <li><a href="#section3" class="nav-link">Section 3</a></li>
        </ul>
      </div>
    </header>
    <!-- MAIN -->
    <main>
      <div
        class="flex min-h-screen items-center justify-center bg-teal-400 p-10"
      >
        <!-- OPACITY -->
        <div
          class="relative h-96 w-full max-w-lg overflow-hidden rounded-lg shadow-2xl"
        >
          <img
            src="./images/1.jpg"
            alt="mine"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
          <div class="relative flex w-full items-center justify-center">
            <h1 class="text-3xl tracking-wider text-teal-100">
              Your adventure starts today
            </h1>
          </div>
        </div>
      </div>
    </main>

  </body>
</html>

///////////////////////////////////////////////////

 <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="rounded-lg bg-gray-100 px-6 py-8 shadow sm:px-10">
        <form class="mb-0 space-y-6">
          <!-- input 1 -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <div class="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                required
                class=""
              />
            </div>
          </div>
          <!-- Password -->
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <div class="mt-1">
              <input
                type="password"
                name="password"
                id="password"
                autocomplete="current-password"
                required
                class=""
              />
            </div>
          </div>
          <!--  -->
          <div>
            <label
              for="company-size"
              class="block text-sm font-medium text-gray-700"
              >Company size</label
            >
            <div class="mt-1">
              <select name="company-size" id="company-size" class="">
                <option value="">Please select</option>
                <option value="small">1 - 10 employees</option>
                <option value="medium">11 - 50 employees</option>
                <option value="large">50+ employees</option>
              </select>
            </div>
          </div>
          <!-- CHECKBOX -->
          <div class="flex items-center">
            <input
              type="checkbox"
              name="terms-and-privacy"
              id="terms-and-privacy"
              class=""
            />
            <label
              for="terms-and-privacy"
              class="ml-2 block text-sm text-gray-900"
              >I agree to the
              <a href="#" class="text-indigo-600 hover:text-indigo-500"
                >Terms</a
              >
              and
              <a href="#" class="text-indigo-600 hover:text-indigo-500"
                >Privacy policy</a
              >
            </label>
          </div>
          <!-- BUTTON -->
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm"
            >
              sign up
            </button>
          </div>
        </form>
      </div>
    </div>
