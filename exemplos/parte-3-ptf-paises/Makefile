file=index
folder=ex_ptf_paises

qrhtml:
	quarto render $(file).qmd --to html

qrpdf:
	quarto render $(file).qmd --to pdf

qrall:
	quarto render $(file).qmd --to pdf
	quarto render $(file).qmd --to html
	quarto render $(file).qmd --to docx

qrdocx:
	quarto render $(file).qmd --to docx 

qrrevealjs:
	quarto render $(file).qmd --to revealjs

qrrevealjs:
	quarto preview $(file).qmd --to revealjs

qppdf:
	quarto preview $(file).qmd --to pdf

qphtml:
	quarto preview $(file).qmd --to html


