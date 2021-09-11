var obj = {
  name: "form",
  attributes: {
    class: "sidebar-form",
    contenteditable: "false",
  },
  items: {
    "element##0": {
      name: "p",
      attributes: {
        class: "second-para",
        contenteditable: "true",
      },
      items: {
        "text##0": "content of the second paragraph",
      },
    },
  },
};

var neel = {
  name: "div",
  items: {
    "element##0": {
      name: "input",
      attributes: {
        type: "range",
        id: "volume",
        name: "volume",
        min: "0",
        max: "11",
        style: {
          margin: ".4rem",
        },
      },
    },
    "element##1": {
      name: "label",
      attributes: {
        for: "volume",
        style: {
          font: "1rem 'Firs Sans',sans-serif",
        },
      },
      items: {
        text: "volume",
        type: "text",
      },
    },
  },
};

CreateEntity.create(neel, document.body);

CreateEntity.create(obj, document.getElementById("root"));
