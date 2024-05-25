import { Fragment, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

export default function ThemeToggle() {
  // Set CSS Variables
  const setVariables = (theme) => {
    localStorage.setItem("theme", theme);
    const container = document.getElementById("main-container");
    theme = themeOption.filter((th) => th.theme === theme)[0];

    if (!theme) {
      theme = themeOption[1];
    }
    
    // Set CSS Variables
    Object.keys(theme.variables).map((v) => {
      container.style.setProperty(`--${v}`, theme.variables[v]);
    });
  };

  // Check if theme is already set
  useEffect(() => {
    var t = localStorage.getItem("theme");

    if (t) {
      setVariables(t);
    } else {
      localStorage.setItem("theme", "Cosmic Groove");
      setVariables("Cosmic Groove");
    }
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="w-full rounded-full bg-background px-4 py-2 font-semibold text-text shadow-md ring-1 ring-inset ring-text hover:bg-secondary/70">
        <i className="fa-solid fa-sun text-yellow-500 text-sm"></i>
        <span className="mx-2">Theme</span>
        <i
          className="fa-solid fa-chevron-down -mr-1  text-text"
          aria-hidden="true"
        />
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-text/40 ring-opacity-5 focus:outline-none">
          <div className="p-2">
            {themeOption.map((opt, i) => (
              <MenuItem key={i}>
                <button
                  onClick={() => setVariables(opt.theme)}
                  className="w-full whitespace-nowrap rounded-md text-left py-1.5 px-4 data-[focus]:bg-secondary/50"
                >
                  {opt.theme}
                </button>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}


// Themes
const themeOption = [
  {
    theme: "Horror Night",
    variables: {
      text: "225 207 253",
      background: "5 0 13",
      primary: "173 127 250",
      secondary: "166 6 53",
      accent: "246 45 18",
    },
  },
  {
    theme: "Cosmic Groove",
    variables: {
      text: "224 241 245",
      background: "4 10 11",
      primary: "145 204 220",
      secondary: "39 46 122",
      accent: "114 92 203",
    },
  },
  {
    theme: "Jungle Funk",
    variables: {
      text: "227 250 219",
      background: "6 19 3",
      primary: "164 240 141",
      secondary: "101 19 144",
      accent: "225 32 102",
    },
  },
  {
    theme: "Golden Hour",
    variables: {
      text: "252 223 223",
      background: "33 3 5",
      primary: "241 118 125",
      secondary: "152 90 15",
      accent: "232 186 28",
    },
  },
  {
    theme: "Starry Twilight",
    variables: {
      text: "223 231 249",
      background: "2 4 10",
      primary: "129 155 233",
      secondary: "130 23 23",
      accent: "224 202 77",
    },
  },
  {
    theme: "Aqua Oasis",
    variables: {
      text: "229 254 243",
      background: "1 38 20",
      primary: "108 250 186",
      secondary: "5 120 157",
      accent: "52 165 248",
    },
  },
  {
    theme: "Everygreen Harmony",
    variables: {
      text: "224 243 224",
      background: "5 16 5",
      primary: "152 227 152",
      secondary: "31 141 31",
      accent: "49 219 50",
    },
  },
  {
    theme: "Mystic Lavender",
    variables: {
      text: "233 232 249",
      background: "6 5 20",
      primary: "142 136 223",
      secondary: "137 37 109",
      accent: "209 81 121",
    },
  },
  {
    theme: "Neon Zest",
    variables: {
      text: "229 242 220",
      background: "12 21 6",
      primary: "171 229 129",
      secondary: "78 156 23",
      accent: "125 236 46",
    },
  },
  {
    theme: "Electric Dreams",
    variables: {
      text: "220 234 254",
      background: "1 9 23",
      primary: "111 156 252",
      secondary: "73 4 160",
      accent: "175 37 250",
    },
  },
];
