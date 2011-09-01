LDIFGrep
========

Quick-and-dirty grep for LDIF files.

Ex:

    zcat -q data.ldif.gz | ldifgrep your@mail.tld | less

Caveats
-------

  * Only loads from `stdin`. Should be easy to fix, though.
  * "Fixes" broken lines, so matching works better + easier to grep later.
  * Fails quite hard if interrupted while working.
  * No sanity-checking of input. What so ever.
  * YMMV

Getting it
----------

For now:

    git clone https://msiebuhr@github.com/msiebuhr/node-ldifgrep.git
	cd node-ldifgrep
	npm link

Once I get registered on npmjs.org:

    npm install ldifgrep
