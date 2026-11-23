import re, glob, sys, os
out = sys.argv[1]
os.chdir(out)
h = open('index.html').read()
h = re.sub(r'<!-- Google Tag Manager \(GTM.*?</script>\s*', '', h, flags=re.S)
h = re.sub(r'<!-- Google Tag Manager \(noscript\) -->\s*<noscript>.*?</noscript>', '', h, flags=re.S)
h = re.sub(r'<link rel="preload"[^>]*>', '', h)
h = re.sub(r'<title>.*?</title>', '<title>ShahRukh Sulehry Portfolio</title>', h)
h = h.replace('href="/favicon.svg"', 'href="./favicon.svg"').replace('href="/apple-touch-icon.png"', 'href="./apple-touch-icon.png"')
h = re.sub(r'<!doctype html>|</?html[^>]*>|</?head>|</?body>', '', h, flags=re.I)
# move <title> to the very top
t = re.search(r'<title>.*?</title>', h).group(0)
h = t + '\n' + h.replace(t, '')
open('page.html', 'w').write(h.strip() + '\n')
for f in glob.glob('assets/*.js') + glob.glob('assets/*.css'):
    s = open(f).read()
    s = s.replace('"/images/', '"./images/').replace('"/ShahRukh-Sulehry-CV.pdf"', '"./ShahRukh-Sulehry-CV.pdf"')
    open(f, 'w').write(s)
