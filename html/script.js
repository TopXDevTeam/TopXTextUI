const createUI = (textUIType, message) => {
    const type = textUIType.toLowerCase().replace(/\s/g, '');
    const MainConatiner = document.querySelector('.textui-container')
    const TextUIDiv = document.createElement('div')
    TextUIDiv.classList.add('textui', `textui-${type}`)

    const TextUIIcon = document.createElement('i')
    TextUIIcon.classList.add("fa-keyboard", 'fa-solid')
    TextUIIcon.style.color = getIconColor(type)
    TextUIDiv.append(TextUIIcon)

    const TextUITextDiv = document.createElement('div')
    TextUITextDiv.classList.add('textui-text')
    TextUIDiv.append(TextUITextDiv)

    const TextUIContent = document.createElement('p')
    TextUIContent.innerHTML = message.toUpperCase()
    TextUITextDiv.append(TextUIContent)

    MainConatiner.append(TextUIDiv)

    const ShowUI = () => {
        TextUIDiv.style.display = "flex";
    };

    return { ShowUI };
};

const getIconColor = (type) => {
    switch (type) {
        case "success":
            return "rgba(71, 215, 100, .6)";
        case "error":
            return "rgba(255, 53, 91, .6)";
        case "info":
            return "rgba(47, 134, 235, .6)";
        case "warning":
            return "rgba(255, 192, 33, .6)";
        case "bank":
            return "rgba(209, 128, 6, .6)";
        default:
            return "rgba(255, 255, 255, .6)";
    }
};

function ShowUI(type, message) {
    const notification = createUI(type, message);
    notification.ShowUI();
};

function HideUI() {
    const TEXTUIS = document.querySelectorAll('.textui')
    TEXTUIS.forEach((e) => {
        e.style.animation = `slideOut .5s ease`
        setTimeout(() => {
            e.remove()
        }, 450);
    })
}

window.addEventListener("message", (e) => {
    if (e.data.action === 'showUI') {
        ShowUI(e.data.type, e.data.message)
    } else if (e.data.action === 'hideUI') {
        HideUI()
    }
})