file=index
folder=$(notdir $(CURDIR))

html:
	quarto render

sync:
	rsync -avzhe "ssh -i ~/.chave/chave_limpa" --info=progress2 --delete _book/ bibr@159.89.36.185:/var/www/roneyfraga.com/public_html/micro

all:
	quarto render
	rsync -avzhe "ssh -i ~/.chave/chave_limpa" --info=progress2 --delete _book/ bibr@100.104.99.20:/var/www/roneyfraga.com/public_html/micro

serve:
	quarto preview --no-browser
