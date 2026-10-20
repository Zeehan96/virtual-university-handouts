import "./globals.css";

export const metadata = {
  title: "VU StudyHub - Virtual University Handouts, Solved Past Papers & Study Files",
  description: "Comprehensive study portal for Virtual University (VU) Pakistan students. Instant access to official handouts, Moaaz & Waqar Sidhu solved midterm and finalterm papers, grand quiz files, and notes for BSCS, BSSE, BSIT, BBA, and all programs.",
  icons: {
    icon: [
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/icon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=2', sizes: 'any' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/apple-touch-icon.png?v=2',
  },
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
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
