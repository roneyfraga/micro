file=index
folder=$(notdir $(CURDIR))

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

revealjs:
	quarto render $(file).qmd --to revealjs

qppdf:
	quarto preview $(file).qmd --to pdf

qphtml:
	quarto preview $(file).qmd --to html

qrrevealjs:
	quarto preview $(file).qmd --to revealjs


