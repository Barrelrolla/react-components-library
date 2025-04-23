# Contexts

## Theme Context

Theme Context provides the ability to toggle between themes saved in local storage and adjust some app-wide settings:  
`inputsRadius`  
Radius for buttons and inputs.  
`transitions`  
Ability to disable all animated transitions in the app.  
`scalingButtons`  
Choose if buttons will scale down on press.  
`buttonsRetainFocus`  
If buttons like the outline button should remain their solid hover state during focus.

## DarkModeContext

The dark mode context reads and updates the dark theme prefernce of the user. It is required to use the Dark Mode Switcher and Toggle. It keeps the data in one place, so the buttons are in sync. It is included by default in the Theme Context, but can be used separately.

# Components

A collection of react components for personal use.

## Anchor

<img src='../images/Anchor/anchor.png' style='max-height:30px'/>

[Anchor](components/Anchor/Anchor.md)

## Button

<img src='../images/Button/button.png' style='max-height:50px' />

A simple button: [Button](components/Button/Button.md)

## Button Group

<img src='../images/Button/buttonGroup.png' style='max-height:50px' />

Group buttons together: [Button Group](components/Button/ButtonGroup.md)

## Dark Mode Toggle

<img src='../images/DarkModeToggle/DarkModeSelector.png' style='max-height:40px'/> <img src='../images/DarkModeToggle/DarkModeToggle.png' style='max-height:30px'/>

A toggle for switching between light, dark and system preferred mode: [Dark Mode Toggle](components/DarkModeToggle/DarkModeToggle.md)

## Hamburger Button

<img src='../images/HamburgerButton/HamburgerButton.png' style='max-height:30px'/>

[Hamburger Button](components/HamburgerButton/HamburgerButton.md)

## Navbar

[Navbar](components/Navbar/Navbar.md)
