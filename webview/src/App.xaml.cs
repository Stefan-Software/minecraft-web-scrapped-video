﻿using Microsoft.UI;
using Microsoft.UI.Windowing;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Controls.Primitives;
using Microsoft.UI.Xaml.Data;
using Microsoft.UI.Xaml.Input;
using Microsoft.UI.Xaml.Media;
using Microsoft.UI.Xaml.Navigation;
using Microsoft.UI.Xaml.Shapes;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.ApplicationModel;
using Windows.ApplicationModel.Activation;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace webview
{
    /// <summary>
    /// Provides application-specific behavior to supplement the default Application class.
    /// </summary>
    public partial class App : Application
    {
        /// <summary>
        /// Initializes the singleton application object.  This is the first line of authored code
        /// executed, and as such is the logical equivalent of main() or WinMain().
        /// </summary>
        public App()
        {
            this.InitializeComponent();
        }

        /// <summary>
        /// Invoked when the application is launched.
        /// </summary>
        /// <param name="args">Details about the launch request and process.</param>
        protected override void OnLaunched(Microsoft.UI.Xaml.LaunchActivatedEventArgs args)
        {
            IntPtr hwnd;

            m_window = new MainWindow();

            // Get Window Handle
            hwnd = WinRT.Interop.WindowNative.GetWindowHandle(m_window);
            WindowId wndId = Win32Interop.GetWindowIdFromWindow(hwnd);
            AppWindow appW = AppWindow.GetFromWindowId(wndId);

            // Custom Title bar
            Color backgroundColor = Color.FromArgb(255, 0, 0, 0);


            appW.Title = "Frontend Titan Game";
            var titleBar = appW.TitleBar;
            titleBar.BackgroundColor = backgroundColor;
            titleBar.ButtonBackgroundColor = backgroundColor;
            titleBar.ButtonHoverBackgroundColor = Color.FromArgb(255, 25, 25, 25);
            titleBar.InactiveBackgroundColor = backgroundColor;
            titleBar.ButtonInactiveBackgroundColor = backgroundColor;
            titleBar.ButtonPressedBackgroundColor = backgroundColor;

            m_window.Activate();
        }

        private Window m_window;
    }
}
