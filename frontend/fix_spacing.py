import os
import re

directory = 'src/app'

# T-shirt to numeric map
spacing_map = {
    'xs': '1',    # 4px
    'sm': '3',    # 12px
    'md': '6',    # 24px
    'lg': '10',   # 40px
    'xl': '16'    # 64px
}

# Prefixes for spacing utilities
prefixes = ['p', 'px', 'py', 'pt', 'pb', 'pl', 'pr',
            'm', 'mx', 'my', 'mt', 'mb', 'ml', 'mr',
            'gap', 'space-x', 'space-y']

def replace_classes(match):
    prefix = match.group(1)
    size = match.group(2)
    if size in spacing_map:
        return f"{prefix}-{spacing_map[size]}"
    return match.group(0)

# Build regex pattern: e.g. \b(p|px|py|gap|m|...)-(xs|sm|md|lg|xl)\b
pattern = re.compile(r'\b(' + '|'.join(prefixes) + r')-(xs|sm|md|lg|xl)\b')

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
            
            new_content = pattern.sub(replace_classes, content)
            
            if new_content != content:
                with open(path, 'w') as f:
                    f.write(new_content)
                print(f"Updated {path}")
