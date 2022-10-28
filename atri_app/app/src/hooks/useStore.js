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
    "Flex1": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "Flex4": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "TextBox1": {
      "custom": {
        "text": "Github Traffic App"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Visitors": {
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
    "TextBox2": {
      "custom": {
        "text": "Visitors"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Cloners": {
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
    "TextBox3": {
      "custom": {
        "text": "Git Clones"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Sites": {
      "custom": {
        "rows": [],
        "cols": []
      },
      "callbacks": {}
    },
    "TextBox4": {
      "custom": {
        "text": "Referring sites"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Content": {
      "custom": {
        "rows": [],
        "cols": []
      },
      "callbacks": {}
    },
    "TextBox5": {
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
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
