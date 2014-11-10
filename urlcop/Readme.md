
# urlcop

UrlCop is tiny library that help you validate if all urls used in your javascript code are correct.

## Usage:

`urlcop [options] [file]`

###options
* `-h` or `--help` - Display help information
* `-p <name>` or `--provider <name>` - Use route provider `<name>`. Provider configuration is stored in `<name>.json`
* `-pa <path>` or `--provider-args <path>` - Specify path to file with arguments for provider

Example:

`urlcop --provider webapi --provider-args myapp.json`

## License 

(The MIT License)

Copyright (c) 2014 Slawomir Rosiek &lt;rosieks@hotmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.