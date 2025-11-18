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

qs:
	rsync -avzhe "ssh -i ~/.chave/chave_limpa" --info=progress2 --delete ../$(folder)/ bibr@100.104.99.20:/var/www/roneyfraga.com/public_html/class/microii/$(folder)/
	# rsync -avzhe "ssh -i ~/.chave/chave_limpa" --info=progress2 --delete ../$(folder)/ bibr@159.89.36.185:/var/www/roneyfraga.com/public_html/class/microii/$(folder)/

All:
	quarto render $(file).qmd --to pdf
	quarto render $(file).qmd --to html
	quarto render $(file).qmd --to docx
	rsync -avzhe "ssh -i ~/.chave/chave_limpa" --info=progress2 --delete ../$(folder)/ bibr@100.104.99.20:/var/www/roneyfraga.com/public_html/class/microii/$(folder)/
