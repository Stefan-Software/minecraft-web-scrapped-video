using Microsoft.UI.Xaml;
using System.Diagnostics;
using System.Threading.Tasks;

namespace webview
{
    public sealed partial class MainWindow : Window
    {
        public MainWindow()
        {
            AsyncContainer();
        }

        async void AsyncContainer()
        {
            Task nodeTask = NodeJS();
            InitializeComponent();

            // Wait for the NodeJS task to complete
            await nodeTask;
        }

        static async Task NodeJS()
        {
            string argument = "vite";

            ProcessStartInfo psi = new ProcessStartInfo();
            psi.FileName = "../../nodejs/npx.cmd";
            psi.Arguments = argument;
            psi.WindowStyle = ProcessWindowStyle.Hidden;
            psi.CreateNoWindow = true;

            using (Process process = new Process { StartInfo = psi })
            {
                process.Start();
                await process.WaitForExitAsync();
            }
        }
    }
}