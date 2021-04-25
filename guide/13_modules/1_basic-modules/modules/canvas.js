function create(id, parent, width, height) {
    const divWrapper = document.createElement("div");
    const canvasElement = document.createElement("canvas");
    divWrapper.id = id;
    canvasElement.width = width;
    canvasElement.height = height;

    parent.appendChild(divWrapper);
    divWrapper.appendChild(canvasElement);

    let ctx = canvasElement.getContext("2d");

    return {
        ctx: ctx,
        id: id,
    };
}

function createReportList(wrapperId) {
    const list = document.createElement("ul");
    list.id = wrapperId + "-reporter";

    const canvasWrapper = document.getElementById(wrapperId);
    canvasWrapper.appendChild(list);

    return list.id;
}

export { create, createReportList };
