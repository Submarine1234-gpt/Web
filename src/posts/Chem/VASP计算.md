---
author : Submarine
date : 2026-02-18
ico : pen

---

# VASP计算手册
VASP计算所需的材料有：
1. `POSCAR` :  描述晶体结构的文件
2. `KPoint` ： 布里渊区的K采样，体系越大精度越高K点越密集。
3. `INCAR`  ： 计算参数输入
## 第一步：结构优化(自洽计算)
目的是得到能量最低的结构
如果不进行设置，默认条件是`0K`,`无外压`
### 准备材料


#### 建模
1. 使用`Materials Studio`进行建模，最好用最小的晶胞进行结构粗优化。
2. 选取拟合度好的模型进行精修。
3. 输出为 `.xsd` 或 `.cif` 文件进行保存
4. 使用 `VASPKIT`将文件转换为`POSCAR`。

#### INCAR

```bash title="生成INCAR文件"
vaspkit
1 ( VASP Input-Files Kit )
101 ( Customize INCAR Files)
ST LR ( Static-Calculation Lattice Relaxtion)
```
```bash title="修改INCAR"
vim INCAR
```
ISTART = 0
ISPIN = 1 
ICHARG = 2 (只有能带是11)
LREAL = AUTO (精度)
ENCUT = 520 (电子能量范围，根据`POTCAR`中的价带电子能量乘上系数1.3，大多数520足够)
PREC = Accurate （结构优化必须选Accurate）
LWAVE = FALSE （拒绝输出计算完的波函数）
LCHARG FALSE (拒绝计算完的电子参数输出)
KPAR = 7
NPAR = 7

ISMEAR = 0
SIGMA = 0.05
LORBIT = 11
NEDOS = 2001
NELM = 60
EDIFF = 1E-05
EDIFFG = -0.01
NSW = 500
IBRION = -1
    
#### KPoint
使用VASPKIT生成
```bash title="KPOINT生成"
vaspkit
1
102
1
0.03
```

### 开始计算
获得输出文件`CONTAR`

## 第二步：静态自洽（非自洽计算）
### POSCAR
将第一步生成的`CONTAR`复制出来并重命名为`POSCAR`
### INCAR

LWAVE = TRUE
LCHARG = TRUE
NSW = 0
### KPOINT
与第一步相同直接复制即可

## 第三步：态密度求解
### INCAR
复制第一步的INCAR
`ISTART` = 1
`ICHARG` = 11
### KPOINTS
在第二步的文件夹中生成 `kpath.in`
```bash
vaspkit
3
303
```
将第二行数值改为25，数值越大越准
复制此文件到第三步的文件夹中并重命名为`KPOINTS`

### 函数
复制第二步产生的`WAVECAR` `CHGCAR`

## 第四步：数据处理

```bash
vaspkit
21
211

```
## VASP 参数大全
1. ISTART  1=参考 0=全新计算
2.