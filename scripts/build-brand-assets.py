"""Deterministic proposed Elevate identity. Custom wordmark, not a font."""
from pathlib import Path
import math, json, zipfile
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
ROOT=Path(__file__).resolve().parents[1]/'public/visual-guidelines'
A=ROOT/'assets'; A.mkdir(exist_ok=True,parents=True)
FONT=TTFont(ROOT/'fonts/DM-Sans.ttf'); GS=FONT.getGlyphSet(); CM=FONT.getBestCmap()
def capsule(x1,y1,x2,y2,r):
 a=math.atan2(y2-y1,x2-x1); dx=-math.sin(a)*r; dy=math.cos(a)*r
 return f'M{x1+dx:.3f} {y1+dy:.3f} L{x2+dx:.3f} {y2+dy:.3f} A{r} {r} 0 0 0 {x2-dx:.3f} {y2-dy:.3f} L{x1-dx:.3f} {y1-dy:.3f} A{r} {r} 0 0 0 {x1+dx:.3f} {y1+dy:.3f}Z '
def mark(micro=False):
 p='M60 4L112 103H8Z M8 110H112L60 158Z '
 p+='M47 103A13 13 0 0 1 73 103Z '
 rays=[(-130,40),(-90,68),(-50,40)] if micro else [(-150,35),(-120,48),(-90,70),(-60,48),(-30,35)]
 for angle,end in rays:
  a=math.radians(angle); p+=capsule(60+23*math.cos(a),103+23*math.sin(a),60+end*math.cos(a),103+end*math.sin(a),3.5 if micro else 2.8)
 p+=capsule(40 if micro else 38,121,80 if micro else 82,121,3)
 if not micro:p+=capsule(50,135,70,135,2.8)
 return f'<path fill-rule="evenodd" d="{p}"/>'
GLYPHS={
'E':'M0 0H44V7H7V46H36V53H7V93H44V100H0Z',
'L':'M0 0H7V93H44V100H0Z',
'V':'M0 0H7.5L23 83L38.5 0H46L27 100H19Z',
'A':'M19 0H27L46 100H38.5L33 70H13L7.5 100H0Z M14.5 63H31.5L23 16Z',
'T':'M0 0H46V7H26.5V100H19.5V7H0Z'}
def word():return ''.join(f'<path transform="translate({i*69} 0)" fill-rule="evenodd" d="{GLYPHS[l]}"/>' for i,l in enumerate('ELEVATE'))
def descriptor(width):
 chunks=[]; x=0
 for l in 'SOCIAL LOUNGE':
  g=GS[CM[ord(l)]]; pen=SVGPathPen(GS); g.draw(pen); chunks.append(f'<path transform="translate({x} 0)" d="{pen.getCommands()}"/>'); x+=g.width+180
 scale=width/(x-180)
 return f'<g transform="scale({scale} {-scale})">'+''.join(chunks)+'</g>'
def svg(body,w,h,color,label):
 return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-label="{label}"><title>{label} | Proposed v0.8</title><g fill="{color}">{body}</g></svg>'
colors={'teal':'#087F80','orange':'#F39A3B','ink':'#173536','white':'#FFFFFF'}
manifest=[]
for color,hex in colors.items():
 for form in ['horizontal','stacked','wordmark','symbol','micro']:
  if form=='horizontal':body='<g transform="translate(8 8)">'+mark()+'</g><g transform="translate(157 22)">'+word()+'</g><g transform="translate(158 157)">'+descriptor(300)+'</g>'; w,h=638,184
  elif form=='stacked':body='<g transform="translate(198 3)">'+mark()+'</g><g transform="translate(25 197)">'+word()+'</g><g transform="translate(83 342)">'+descriptor(350)+'</g>';w,h=510,364
  elif form=='wordmark':body='<g transform="translate(15 12)">'+word()+'</g>';w,h=488,124
  else:body=mark(form=='micro');w,h=120,162
  name=f'elevate-{form}-{color}.svg'; (A/name).write_text(svg(body,w,h,hex,'Elevate Social Lounge' if form in ['horizontal','stacked'] else 'Elevate'))
  manifest.append({'file':name,'format':form,'color':hex,'status':'Proposed v0.8'})
(A/'asset-manifest.json').write_text(json.dumps({'version':'0.8','status':'Proposed. Not production approved.','wordmark':'Custom drawn vector lettering. Not a complete typeface.','descriptor':'Outlined DM Sans, SIL Open Font License 1.1.','assets':manifest},indent=2))
print('Built',len(manifest),'SVG assets')
