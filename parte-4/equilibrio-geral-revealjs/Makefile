file=index
folder=$(notdir $(CURDIR))

revealjs:
	quarto render $(file).qmd --to revealjs

revealjs-nocache:
	quarto render $(file).qmd --to revealjs --cache-refresh

html:
	quarto render $(file).qmd --to html

pdf:
	quarto render $(file).qmd --to pdf

all:
	quarto render $(file).qmd --to pdf
	quarto render $(file).qmd --to html
	quarto render $(file).qmd --to docx

docx:
	quarto render $(file).qmd --to docx 

qppdf:
	quarto preview $(file).qmd --to pdf

qphtml:
	quarto preview $(file).qmd --to html

qrrevealjs:
	quarto preview $(file).qmd --to revealjs

