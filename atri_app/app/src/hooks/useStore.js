import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex81": {
      "callbacks": {}
    },
    "Flex79": {
      "callbacks": {}
    },
    "Flex75": {
      "callbacks": {}
    },
    "Flex71": {
      "callbacks": {}
    },
    "Flex72": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Flex80": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Flex73": {
      "callbacks": {}
    },
    "Flex69": {
      "callbacks": {}
    },
    "Flex66": {
      "callbacks": {}
    },
    "Flex70": {
      "callbacks": {}
    },
    "Flex67": {
      "callbacks": {}
    },
    "Flex64": {
      "callbacks": {}
    },
    "Flex68": {
      "callbacks": {}
    },
    "Flex65": {
      "callbacks": {}
    },
    "Flex78": {
      "callbacks": {}
    },
    "Flex74": {
      "callbacks": {}
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/traffic_slate50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "custom": {
        "text": "Repo traffic"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": "Repo traffic"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/traffic_slate50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Workspaces.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": "Traction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "Source: https://pepy.tech/project/atri"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Table6": {
      "custom": {
        "rows": [],
        "cols": []
      },
      "callbacks": {}
    },
    "Button16": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "custom": {
        "text": "⬇️  Downloads"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "LineChart9": {
      "custom": {
        "data": [],
        "xAxis": {
          "show": true,
          "key": "x"
        },
        "yAxis": {
          "show": true
        },
        "toolTip": {
          "show": true
        },
        "legend": {
          "show": true
        },
        "chartHeight": 400,
        "chartWidth": 400
      },
      "callbacks": {}
    },
    "TextBox48": {
      "custom": {
        "text": "Source: https://pepy.tech/project/atri"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button14": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "custom": {
        "text": "⭐  Stars"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "LineChart10": {
      "custom": {
        "data": [],
        "xAxis": {
          "show": true,
          "key": "x"
        },
        "yAxis": {
          "show": true
        },
        "toolTip": {
          "show": true
        },
        "legend": {
          "show": true
        },
        "chartHeight": 400,
        "chartWidth": 400
      },
      "callbacks": {}
    },
    "TextBox49": {
      "custom": {
        "text": "Source: https://pepy.tech/project/atri"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox46": {
      "custom": {
        "text": "⬇️  Downloads"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button15": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/github_prig.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": "Search"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "custom": {
        "alt": "search",
        "src": "/app-assets/search_icon.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "new": {
    "Flex11": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Flex15": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "Flex30": {
      "callbacks": {}
    },
    "Flex27": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Flex35": {
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Flex63": {
      "callbacks": {}
    },
    "Flex62": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Flex60": {
      "callbacks": {}
    },
    "Flex59": {
      "callbacks": {}
    },
    "Flex61": {
      "callbacks": {}
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/github_prig.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "search",
        "src": "/app-assets/search_icon.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "Search"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "custom": {
        "text": "Source: https://pepy.tech/project/atri"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "LineChart7": {
      "custom": {
        "data": [],
        "xAxis": {
          "show": true,
          "key": "x"
        },
        "yAxis": {
          "show": true
        },
        "toolTip": {
          "show": true
        },
        "legend": {
          "show": true
        },
        "chartHeight": 400,
        "chartWidth": 400
      },
      "callbacks": {}
    },
    "Button6": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "⬇️  Downloads"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "Source: https://pepy.tech/project/atri"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "LineChart8": {
      "custom": {
        "data": [],
        "xAxis": {
          "show": true,
          "key": "x"
        },
        "yAxis": {
          "show": true
        },
        "toolTip": {
          "show": true
        },
        "legend": {
          "show": true
        },
        "chartHeight": 400,
        "chartWidth": 400
      },
      "callbacks": {}
    },
    "TextBox22": {
      "custom": {
        "text": "⭐  Stars"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button8": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Table5": {
      "custom": {
        "rows": [],
        "cols": []
      },
      "callbacks": {}
    },
    "TextBox44": {
      "custom": {
        "text": "Source: https://pepy.tech/project/atri"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "custom": {
        "text": "⬇️  Downloads"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button13": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "custom": {
        "text": "Traction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Workspaces.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/traffic_slate50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "Repo traffic"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "Repo traffic"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/traffic_slate50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "project": {
    "Flex99": {
      "callbacks": {}
    },
    "Flex97": {
      "callbacks": {}
    },
    "Flex93": {
      "callbacks": {}
    },
    "Flex89": {
      "callbacks": {}
    },
    "Flex94": {
      "callbacks": {}
    },
    "Flex90": {
      "callbacks": {}
    },
    "Flex104": {
      "callbacks": {}
    },
    "Flex103": {
      "callbacks": {}
    },
    "Flex120": {
      "callbacks": {}
    },
    "Flex116": {
      "callbacks": {}
    },
    "Flex117": {
      "callbacks": {}
    },
    "Flex118": {
      "callbacks": {}
    },
    "Flex121": {
      "callbacks": {}
    },
    "Flex119": {
      "callbacks": {}
    },
    "Flex149": {
      "callbacks": {}
    },
    "Flex148": {
      "callbacks": {}
    },
    "Flex146": {
      "callbacks": {}
    },
    "Flex147": {
      "callbacks": {}
    },
    "Flex145": {
      "callbacks": {}
    },
    "Flex144": {
      "callbacks": {}
    },
    "Flex143": {
      "callbacks": {}
    },
    "Flex156": {
      "callbacks": {}
    },
    "Flex155": {
      "callbacks": {}
    },
    "Flex153": {
      "callbacks": {}
    },
    "Flex152": {
      "callbacks": {}
    },
    "Flex151": {
      "callbacks": {}
    },
    "Flex150": {
      "callbacks": {}
    },
    "Flex154": {
      "callbacks": {}
    },
    "Flex107": {
      "callbacks": {}
    },
    "Flex105": {
      "callbacks": {}
    },
    "Flex158": {
      "callbacks": {}
    },
    "Flex157": {
      "callbacks": {}
    },
    "Flex169": {
      "callbacks": {}
    },
    "Flex170": {
      "callbacks": {}
    },
    "Flex171": {
      "callbacks": {}
    },
    "Flex173": {
      "callbacks": {}
    },
    "Flex172": {
      "callbacks": {}
    },
    "Flex175": {
      "callbacks": {}
    },
    "Flex174": {
      "callbacks": {}
    },
    "Flex181": {
      "callbacks": {}
    },
    "Flex180": {
      "callbacks": {}
    },
    "Flex176": {
      "callbacks": {}
    },
    "Flex179": {
      "callbacks": {}
    },
    "Flex187": {
      "callbacks": {}
    },
    "Flex185": {
      "callbacks": {}
    },
    "Flex184": {
      "callbacks": {}
    },
    "Flex182": {
      "callbacks": {}
    },
    "Flex183": {
      "callbacks": {}
    },
    "Flex186": {
      "callbacks": {}
    },
    "Flex98": {
      "callbacks": {}
    },
    "Flex95": {
      "callbacks": {}
    },
    "Flex96": {
      "callbacks": {}
    },
    "Flex91": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/project"
            }
          }
        ]
      }
    },
    "Flex92": {
      "callbacks": {}
    },
    "Image21": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/github_prig.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "custom": {
        "alt": "search",
        "src": "/app-assets/search_icon.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "custom": {
        "text": "Search"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "custom": {
        "text": "DOWNLOADS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "custom": {
        "text": "12.9K"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "custom": {
        "text": "+ 10%"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "custom": {
        "alt": "downloads",
        "src": "/app-assets/downloads_icon.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image32": {
      "custom": {
        "alt": "downloads",
        "src": "/app-assets/star.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox94": {
      "custom": {
        "text": "STARS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "custom": {
        "text": "392"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox92": {
      "custom": {
        "text": "+ 10%"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox97": {
      "custom": {
        "text": "TRAFFIC"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox96": {
      "custom": {
        "text": "20K"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox95": {
      "custom": {
        "text": "+ 10%"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image33": {
      "custom": {
        "alt": "downloads",
        "src": "/app-assets/traffic_icon.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox71": {
      "custom": {
        "text": "Source: https://pepy.tech/project/atri"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "LineChart15": {
      "custom": {
        "data": [],
        "xAxis": {
          "show": true,
          "key": "x"
        },
        "yAxis": {
          "show": true
        },
        "toolTip": {
          "show": true
        },
        "legend": {
          "show": true
        },
        "chartHeight": 400,
        "chartWidth": 400
      },
      "callbacks": {}
    },
    "TextBox69": {
      "custom": {
        "text": "⬇️  Downloads history"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image34": {
      "custom": {
        "alt": "dropdown",
        "src": "/app-assets/dropdown.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox98": {
      "custom": {
        "text": "Aug 31 - Oct 31 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox99": {
      "custom": {
        "text": "Lifetime"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "LineChart17": {
      "custom": {
        "data": [],
        "xAxis": {
          "show": true,
          "key": "x"
        },
        "yAxis": {
          "show": true
        },
        "toolTip": {
          "show": true
        },
        "legend": {
          "show": true
        },
        "chartHeight": 400,
        "chartWidth": 400
      },
      "callbacks": {}
    },
    "TextBox106": {
      "custom": {
        "text": "Source: https://github.com/Atri-Labs/atrilabs-engine/stargazers"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "custom": {
        "text": "Stars history"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image38": {
      "custom": {
        "alt": "downloads",
        "src": "/app-assets/star.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "LineChart18": {
      "custom": {
        "data": [],
        "xAxis": {
          "show": true,
          "key": "x"
        },
        "yAxis": {
          "show": true
        },
        "toolTip": {
          "show": true
        },
        "legend": {
          "show": true
        },
        "chartHeight": 400,
        "chartWidth": 400
      },
      "callbacks": {}
    },
    "TextBox109": {
      "custom": {
        "text": "Source: https://pepy.tech/project/atri"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "custom": {
        "text": "Repo traffic"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox111": {
      "custom": {
        "text": "Source: https://pepy.tech/project/atri"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "custom": {
        "text": "Referring site"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "LineChart19": {
      "custom": {
        "data": [],
        "xAxis": {
          "show": true,
          "key": "x"
        },
        "yAxis": {
          "show": true
        },
        "toolTip": {
          "show": true
        },
        "legend": {
          "show": true
        },
        "chartHeight": 400,
        "chartWidth": 400
      },
      "callbacks": {}
    },
    "Dropdown1": {
      "custom": {
        "values": [
          "GitHub",
          "YouTube"
        ],
        "selectedValue": "YouTube"
      },
      "callbacks": {}
    },
    "TextBox114": {
      "custom": {
        "text": "Site"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "custom": {
        "text": "Metric"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown2": {
      "custom": {
        "values": [
          "Total views",
          "Unique views"
        ],
        "selectedValue": "Unique views"
      },
      "callbacks": {}
    },
    "TextBox119": {
      "custom": {
        "text": "Source: https://pepy.tech/project/atri"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "LineChart20": {
      "custom": {
        "data": [],
        "xAxis": {
          "show": true,
          "key": "x"
        },
        "yAxis": {
          "show": true
        },
        "toolTip": {
          "show": true
        },
        "legend": {
          "show": true
        },
        "chartHeight": 400,
        "chartWidth": 400
      },
      "callbacks": {}
    },
    "Dropdown3": {
      "custom": {
        "values": [
          "Total views",
          "Unique views"
        ],
        "selectedValue": "Unique views"
      },
      "callbacks": {}
    },
    "TextBox116": {
      "custom": {
        "text": "Metric"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "custom": {
        "text": "Site"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown4": {
      "custom": {
        "values": [
          "GitHub",
          "YouTube"
        ],
        "selectedValue": "YouTube"
      },
      "callbacks": {}
    },
    "TextBox118": {
      "custom": {
        "text": "Popular content"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "Traction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Workspaces.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image19": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/github_navbar.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "Community"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/traffic_slate50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "event_log": {
    "Flex140": {
      "callbacks": {}
    },
    "Flex139": {
      "callbacks": {}
    },
    "Flex141": {
      "callbacks": {}
    },
    "Flex142": {
      "callbacks": {}
    },
    "TextBox88": {
      "custom": {
        "text": "Event log"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Table8": {
      "custom": {
        "rows": [],
        "cols": [],
        "selection": []
      },
      "callbacks": {}
    },
    "TextBox90": {
      "custom": {
        "text": "How to add a new event?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
