import "./globals.css";

export const metadata = {
  title: "VU StudyHub - Virtual University Handouts, Solved Past Papers & Study Files",
  description: "Comprehensive study portal for Virtual University (VU) Pakistan students. Instant access to official handouts, Moaaz & Waqar Sidhu solved midterm and finalterm papers, grand quiz files, and notes for BSCS, BSSE, BSIT, BBA, and all programs.",
  keywords: [
    "Virtual University handouts",
    "VU past papers",
    "Moaaz past papers",
    "Waqar Sidhu past papers",
    "VU mid term papers",
    "VU final term papers",
    "CS101 handouts",
    "CS201 handouts",
    "MTH101 solved papers",
    "VU CGPA calculator",
    "VU date sheet"
  ],
  authors: [{ name: "VU StudyHub Community" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f2b5c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('vu_theme');
                  var theme = saved || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
