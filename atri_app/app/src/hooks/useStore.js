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
    "Flex319": {
      "callbacks": {}
    },
    "Flex316": {
      "callbacks": {}
    },
    "Flex313": {
      "callbacks": {}
    },
    "Flex307": {
      "callbacks": {}
    },
    "Flex308": {
      "callbacks": {}
    },
    "Flex304": {
      "callbacks": {}
    },
    "Flex301": {
      "callbacks": {}
    },
    "Flex298": {
      "callbacks": {}
    },
    "Flex317": {
      "callbacks": {}
    },
    "Flex314": {
      "callbacks": {}
    },
    "Flex309": {
      "callbacks": {}
    },
    "Flex305": {
      "callbacks": {}
    },
    "Flex302": {
      "callbacks": {}
    },
    "Flex299": {
      "callbacks": {}
    },
    "Flex310": {
      "callbacks": {}
    },
    "Flex318": {
      "callbacks": {}
    },
    "Flex315": {
      "callbacks": {}
    },
    "Flex311": {
      "callbacks": {}
    },
    "Flex312": {
      "callbacks": {}
    },
    "Flex306": {
      "callbacks": {}
    },
    "Flex303": {
      "callbacks": {}
    },
    "Flex300": {
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
    "Flex296": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/community"
            }
          }
        ]
      }
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
    "Dropdown9": {
      "custom": {
        "values": [
          "Last 7 days",
          "Last 28 days",
          "Last 365 days",
          "Lifetime"
        ],
        "selectedValue": "Lifetime"
      },
      "callbacks": {}
    },
    "TextBox180": {
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
        "chartWidth": 1000
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
        "text": "Content"
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
          "Contributing.md",
          "Discussions"
        ],
        "selectedValue": "Contributing.md"
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
    "Image63": {
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
    "TextBox191": {
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
    "TextBox188": {
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
    "TextBox185": {
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
    "TextBox192": {
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
    "TextBox189": {
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
    "TextBox186": {
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
    "TextBox194": {
      "custom": {
        "text": "⭐"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image65": {
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
    "TextBox193": {
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
    "TextBox190": {
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
    "TextBox187": {
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
    },
    "TextBox183": {
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
    "Image61": {
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
    "Flex292": {
      "callbacks": {}
    },
    "Flex290": {
      "callbacks": {}
    },
    "Flex286": {
      "callbacks": {}
    },
    "Flex287": {
      "callbacks": {}
    },
    "Flex283": {
      "callbacks": {}
    },
    "Flex142": {
      "callbacks": {}
    },
    "Flex291": {
      "callbacks": {}
    },
    "Flex288": {
      "callbacks": {}
    },
    "Flex289": {
      "callbacks": {}
    },
    "Flex284": {
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
    "Flex285": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/community"
            }
          }
        ]
      }
    },
    "Flex293": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/community"
            }
          }
        ]
      }
    },
    "Image57": {
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
    "Table8": {
      "custom": {
        "rows": [
          {
            "id": 1,
            "date": "Oct 1",
            "activity": "Conference talk at ConfName",
            "reach": 100,
            "comments": "Smaller conferences can sometimes lead to better traction"
          },
          {
            "id": 2,
            "date": "Oct 15",
            "activity": "Conference talk at ConfName2",
            "reach": 200
          },
          {
            "id": 3,
            "date": "Oct 31",
            "activity": "Conference talk at ConfName3",
            "reach": 300
          }
        ],
        "cols": [
          {
            "field": "id",
            "headerName": "ID"
          },
          {
            "field": "date",
            "headerName": "Date"
          },
          {
            "field": "activity",
            "headerName": "Activity",
            "width": 300
          },
          {
            "field": "reach",
            "headerName": "Reach",
            "type": "number"
          },
          {
            "field": "comments",
            "headerName": "Comments",
            "width": 300
          }
        ],
        "selection": [],
        "checkboxSelection": false,
        "autoHeight": true,
        "rowHeight": 40
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
    },
    "TextBox177": {
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
    "Image58": {
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
    "Image55": {
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
    "TextBox175": {
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
    "TextBox176": {
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
    "Image56": {
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
    "Image59": {
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
    "TextBox178": {
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
    }
  },
  "community": {
    "Flex241": {
      "callbacks": {}
    },
    "Flex239": {
      "callbacks": {}
    },
    "Flex235": {
      "callbacks": {}
    },
    "Flex231": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/community"
            }
          }
        ]
      }
    },
    "Flex232": {
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
    "Flex297": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/community"
            }
          }
        ]
      }
    },
    "Flex236": {
      "callbacks": {}
    },
    "Flex240": {
      "callbacks": {}
    },
    "Flex237": {
      "callbacks": {}
    },
    "Flex233": {
      "callbacks": {}
    },
    "Flex226": {
      "callbacks": {}
    },
    "Flex217": {
      "callbacks": {}
    },
    "Flex227": {
      "callbacks": {}
    },
    "Flex218": {
      "callbacks": {}
    },
    "Flex209": {
      "callbacks": {}
    },
    "Flex229": {
      "callbacks": {}
    },
    "Flex220": {
      "callbacks": {}
    },
    "Flex230": {
      "callbacks": {}
    },
    "Flex221": {
      "callbacks": {}
    },
    "Flex210": {
      "callbacks": {}
    },
    "Flex201": {
      "callbacks": {}
    },
    "Flex202": {
      "callbacks": {}
    },
    "Flex194": {
      "callbacks": {}
    },
    "Flex191": {
      "callbacks": {}
    },
    "Flex188": {
      "callbacks": {}
    },
    "Flex222": {
      "callbacks": {}
    },
    "Flex211": {
      "callbacks": {}
    },
    "Flex203": {
      "callbacks": {}
    },
    "Flex195": {
      "callbacks": {}
    },
    "Flex192": {
      "callbacks": {}
    },
    "Flex189": {
      "callbacks": {}
    },
    "Flex204": {
      "callbacks": {}
    },
    "Flex223": {
      "callbacks": {}
    },
    "Flex212": {
      "callbacks": {}
    },
    "Flex205": {
      "callbacks": {}
    },
    "Flex206": {
      "callbacks": {}
    },
    "Flex196": {
      "callbacks": {}
    },
    "Flex193": {
      "callbacks": {}
    },
    "Flex190": {
      "callbacks": {}
    },
    "Flex248": {
      "callbacks": {}
    },
    "Flex247": {
      "callbacks": {}
    },
    "Flex294": {
      "callbacks": {}
    },
    "Flex238": {
      "callbacks": {}
    },
    "Flex234": {
      "callbacks": {}
    },
    "Image44": {
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
    "TextBox145": {
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
    "TextBox146": {
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
    "Image45": {
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
    "TextBox184": {
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
    "Image62": {
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
    "Image47": {
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
    "TextBox148": {
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
    "TextBox142": {
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
    "LineChart23": {
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
    "TextBox135": {
      "custom": {
        "text": "YouTube watch duration (hrs)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
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
    "LineChart24": {
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
    "TextBox136": {
      "custom": {
        "text": "YouTube views"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image42": {
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
    "LineChart25": {
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
    "TextBox144": {
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
    "TextBox139": {
      "custom": {
        "text": "YouTube subscribers"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image39": {
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
    "TextBox126": {
      "custom": {
        "text": "SLACK MEMBERS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox123": {
      "custom": {
        "text": "250"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
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
    "TextBox127": {
      "custom": {
        "text": "YT VIEWS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox124": {
      "custom": {
        "text": "5.2K"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
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
    "Image40": {
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
    "Image41": {
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
    "TextBox128": {
      "custom": {
        "text": "YT SUBSCRIBERS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "custom": {
        "text": "70"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
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
    "LineChart28": {
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
    "TextBox154": {
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
    "TextBox153": {
      "custom": {
        "text": "Slack community members"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox181": {
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
    "Dropdown10": {
      "custom": {
        "values": [
          "Last 7 days",
          "Last 28 days",
          "Last 365 days",
          "Lifetime"
        ],
        "selectedValue": "Lifetime"
      },
      "callbacks": {}
    },
    "Image48": {
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
    "TextBox147": {
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
    "Image46": {
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
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
