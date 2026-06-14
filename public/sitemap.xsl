<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>SVIP Gems Sitemap</title>
        <style>
          body { font-family: system-ui, sans-serif; margin: 2rem; background: #0f172a; color: #e2e8f0; }
          h1 { color: #fbbf24; font-size: 1.5rem; }
          p { color: #94a3b8; }
          table { border-collapse: collapse; width: 100%; max-width: 960px; margin-top: 1rem; }
          th, td { border: 1px solid #334155; padding: 0.75rem 1rem; text-align: left; }
          th { background: #1e293b; color: #fbbf24; }
          tr:nth-child(even) { background: #1e293b; }
          a { color: #38bdf8; }
        </style>
      </head>
      <body>
        <h1>SVIP Gems — XML Sitemap</h1>
        <p>This sitemap is valid for Google Search Console. The raw XML tree message in some browsers is normal.</p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="s:urlset/s:url">
            <tr>
              <td><a href="{s:loc}"><xsl:value-of select="s:loc" /></a></td>
              <td><xsl:value-of select="s:lastmod" /></td>
              <td><xsl:value-of select="s:changefreq" /></td>
              <td><xsl:value-of select="s:priority" /></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
