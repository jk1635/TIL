# Customize Jupyter Notebook Theme

## Install with pip

```bash
# install jupyterthemes
pip install jupyterthemes

# upgrade to latest version
pip install --upgrade jupyterthemes
```

## Install with conda

```bash
# install jupyterthemes
conda install -c conda-forge jupyterthemes

# update to latest version
conda update jupyterthemes
```

## Command Line Examples

```bash
# 사용 가능한 테마 리스트
# onedork | grade3 | oceans16 | chesterish | monokai | solarizedl | solarizedd
jt -l

# 테마 선택
jt -t [theme name]

# toolbar 추가
jt -t [theme name] -T

# filename, logo 추가
jt -t [theme name] -N

# kernel logo 추가
jt -t [theme name] -kl

# 다 추가
jt -t [theme name] -T -N -kl

# Notebook Font Size도 추가
jt -t [theme name] -T -N -kl -nfs 10

# 기본 테마로
jt -r
```

### Command Line Usage

```bash
jt [-h] [-l] [-t THEME] [-f MONOFONT] [-fs MONOSIZE] [-nf NBFONT]
[-nfs NBFONTSIZE] [-tf TCFONT] [-tfs TCFONTSIZE] [-dfs DFFONTSIZE]
[-m MARGINS] [-cursw CURSORWIDTH] [-cursc CURSORCOLOR] [-vim]
[-cellw CELLWIDTH] [-lineh LINEHEIGHT] [-altp] [-altmd] [-altout]
[-P] [-T] [-N] [-r] [-dfonts]
```

참고 : [jupyter-themes](https://github.com/dunovank/jupyter-themes#description-of-command-line-options)
