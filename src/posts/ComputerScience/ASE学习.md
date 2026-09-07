---
author: Submarine
date : 2026-09-07
title: ASE学习
icon: arcticons:adb-over-wifi

---
# 引言
打算玩机器学习，化学物质的输入和计算就需要用到程序包，目前先尝试简单的ASE。
# 特殊的读取CIF方法
```python
# 读取普通CIF
# ASE官方提供的方法，默认会根据对称性等参数生成分子，遇到复杂分子可能耗时长。
from ase.io import read
cif = read("1.ciff")
# 底层读取CIF
# 这种方法比较简便和快速，避免CPU花时间在重构分子上，不过需要先输出block里面有什么东西，再打出文字索引来提取数据。
from ase.io.cif import parse_cif
cif = parse_cif("1.cif")
for blocks in cif:
    print(block)
        print(block['_atom_site_type_symbol'])
        print(set(block['_atom_site_type_symbol']))


```