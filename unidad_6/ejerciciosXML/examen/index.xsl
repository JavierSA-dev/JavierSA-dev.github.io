<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <style>
          table {
          border: 1px solid red;s
          }
          tr {
          background-color: #4CAF50;
          padding: 10%;
          text-align: left;
          }
        </style>
      </head>
      <body>
        <h2>Examen Javier Sánchez López</h2>
        <table>
          <tr>
            <th><a href="daw.xml">DAW</a></th>
            <th><a href="asir.xml">Asir</a></th>
          </tr>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>