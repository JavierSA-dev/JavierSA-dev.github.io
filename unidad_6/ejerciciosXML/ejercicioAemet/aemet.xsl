<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 <xsl:template match="/">
  <html>
    <body>
	  <table border="1px">
	    <tr>
	     <th colspan="9">TABLA DE TEMPERATURAS</th>
	    </tr>
	    <tr>
	      <th>Fecha</th>
	      <th colspan="8">Periodo</th>
	    </tr>
	    <xsl:for-each select="//prediccion/dia">
	    <tr>
	      <th rowspan="2"><xsl:value-of select="@fecha"/></th>
		  <xsl:for-each select="prob_precipitacion">
		  <td><xsl:value-of select="@periodo"/></td>
		  </xsl:for-each>
	    </tr>
	    <tr>
	      <xsl:for-each select="prob_precipitacion">
		  <!-- Utilizando if repetiriamos condicionales
		  <xsl:if test="node() &gt; 10 and node() &lt; 50" >
          	 <td><xsl:value-of select="text()"/></td>
		  </xsl:if>
		  ...
		  ...
		  -->
	      <td>
		    <xsl:value-of select="text()"/>
		    <xsl:choose>
			  <xsl:when test="text() &gt;= 0 and text() &lt;= 25" >
			    <img src="uno.png"/>
			  </xsl:when>
			  <xsl:when test="text() &gt; 25 and text() &lt;= 50" >
			    <img src="dos.png"/>
			  </xsl:when>
			  <xsl:when test="text() &gt;50 and text() &lt;= 75" >
			    <img src="tres.png"/>
			  </xsl:when>
			  <xsl:otherwise>
				<img src="cuatro.png"/>
			  </xsl:otherwise>
		    </xsl:choose>
	      </td>
		  
		</xsl:for-each>
	      </tr>
	    </xsl:for-each>
	  </table>
    </body>
  </html>
 </xsl:template>
</xsl:stylesheet>