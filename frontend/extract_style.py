import urllib.request
import re

url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1N2Q1NzVlMDU5MzEwOTI1YzcyNDRjMTk0MmM1EgsSBxCyoPqY2gMYAZIBIwoKcHJvamVjdF9pZBIVQhMyNzUyMzY3MjQ4MTg5MjA0Njky&filename=&opi=89354086"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    content = response.read().decode('utf-8')

style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
if style_match:
    with open('src/app/globals.css', 'a') as f:
        f.write('\n/* Stitch UI Custom Styles */\n')
        f.write(style_match.group(1))
    print("Styles appended!")
else:
    print("No style block found.")
