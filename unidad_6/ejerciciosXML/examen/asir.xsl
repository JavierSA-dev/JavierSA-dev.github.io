<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <style>
          table {
          border: 1px solid red;
          }
          td {
            border: 1px solid black;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <h2>Clase ASIR</h2>
        <table>

          <xsl:for-each select="/informatica/cursos/curso[@clase='1ASIR']/horario/lunes">
          <tr>
            <td>
              <xsl:value-of select="primera" />
            </td>
            <td>
                <xsl:value-of select="segunda" />
              </td>
              <td>
                <xsl:value-of select="tercera" />
              </td>
              <td>
                <xsl:value-of select="cuarta" />
              </td>
              <td>
                <xsl:value-of select="quinta" />
              </td>
              <td>
                <xsl:value-of select="sexta" />
              </td>
          </tr>
            </xsl:for-each>

          <xsl:for-each select="/informatica/cursos/curso[@clase='1DAW']/horario/martes">
          <tr>
            <td>
              <xsl:value-of select="primera" />
            </td>
            <td>
                <xsl:value-of select="segunda" />
              </td>
              <td>
                <xsl:value-of select="tercera" />
              </td>
              <td>
                <xsl:value-of select="cuarta" />
              </td>
              <td>
                <xsl:value-of select="quinta" />
              </td>
              <td>
                <xsl:value-of select="sexta" />
              </td>
          </tr>
            </xsl:for-each>
          <xsl:for-each select="/informatica/cursos/curso[@clase='1DAW']/horario/miercoles">
          <tr>
            <td>
              <xsl:value-of select="primera" />
            </td>
            <td>
                <xsl:value-of select="segunda" />
              </td>
              <td>
                <xsl:value-of select="tercera" />
              </td>
              <td>
                <xsl:value-of select="cuarta" />
              </td>
              <td>
                <xsl:value-of select="quinta" />
              </td>
              <td>
                <xsl:value-of select="sexta" />
              </td>
          </tr>
            </xsl:for-each>
          <xsl:for-each select="/informatica/cursos/curso[@clase='1DAW']/horario/jueves">
          <tr>
            <td>
              <xsl:value-of select="primera" />
            </td>
            <td>
                <xsl:value-of select="segunda" />
              </td>
              <td>
                <xsl:value-of select="tercera" />
              </td>
              <td>
                <xsl:value-of select="cuarta" />
              </td>
              <td>
                <xsl:value-of select="quinta" />
              </td>
              <td>
                <xsl:value-of select="sexta" />
              </td>
          </tr>
            </xsl:for-each>
          <xsl:for-each select="/informatica/cursos/curso[@clase='1DAW']/horario/viernes">
          <tr>
            <td>
              <xsl:value-of select="primera" />
            </td>
            <td>
                <xsl:value-of select="segunda" />
              </td>
              <td>
                <xsl:value-of select="tercera" />
              </td>
              <td>
                <xsl:value-of select="cuarta" />
              </td>
              <td>
                <xsl:value-of select="quinta" />
              </td>
              <td>
                <xsl:value-of select="sexta" />
              </td>
          </tr>
            </xsl:for-each>
     

 

        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>