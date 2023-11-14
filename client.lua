function TextUI(message, type)
    SendNUIMessage({
        action = 'showUI',
        message = message,
        type = type
    })
end

function HideUI()
    SendNUIMessage({
        action = 'hideUI'
    })
end

RegisterNetEvent('TopXUI:ShowUI')
AddEventHandler('TopXUI:ShowUI', function(message, type)
    TextUI(message, type)
end)

RegisterNetEvent('TopXUI:HideUI')
AddEventHandler('TopXUI:HideUI', function()
    HideUI()
end)

RegisterCommand("test", function()
    
end, false)
