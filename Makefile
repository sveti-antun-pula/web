CHROME ?= /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome
URL ?= file://$(CURDIR)/index.html
OUT ?= /private/tmp/antun_pula_render.png
WINDOW_SIZE ?= 900,2200

.PHONY: render
render:
	$(CHROME) --headless=new --disable-gpu --no-sandbox --window-size=$(WINDOW_SIZE) --screenshot=$(OUT) $(URL)
