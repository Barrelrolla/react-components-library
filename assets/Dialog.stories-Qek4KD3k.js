import{r as o,i as V,j as e}from"./iframe-seTiTV_v.js";import{f as Q,b as c,a as p,e as q}from"./CardTitle-DsBJzLCw.js";import{T as P,a as z,b as _}from"./TooltipContent-BNY2AADM.js";import{e as M,f as R,h as U,i as K,j as W,k as Y,m as b,n as G,o as H,B as s}from"./ButtonGroup-cvsoB710.js";import{t as J}from"./bundle-mjs-Ct12j0u0.js";import{c as X}from"./icons-D9XKdwam.js";import"./preload-helper-PPVm8Dsz.js";import"./FloatingElementContent-DqORj6EY.js";import"./useIsMobile-BPT4M8Vw.js";import"./cssColorProps-D-Xi89r8.js";import"./Slot-B51z0L24.js";import"./Divider-DXQtVhka.js";function Z({backdropClassName:i}){return{classes:"dialog",scrollArea:"max-h-[calc(100vh-2.2rem)] overflow-x-auto scrollbar-thin",backdropClasses:J("dialog-backdrop",i)}}function l({hasInitialFocus:i=!0,isOpen:t,setIsOpen:a,showClose:d=!0,backdropClassName:n,initialStyles:g,className:h,children:C,...O}){const[f,T]=o.useState(null),{refs:j,context:r}=M({open:t,onOpenChange:a}),I=g||{opacity:0,scale:.5,translate:"0 -100px"},{isMounted:y,styles:B}=R(r,{initial:I,duration:150}),S=U(r),k=K(r,{outsidePressEvent:"click"}),w=W(r),{getFloatingProps:A}=Y([S,k,w]),E=b(),D=b(),{classes:N,scrollArea:L,backdropClasses:F}=Z({backdropClassName:n});if(o.useEffect(()=>{T(document.body)},[]),!(!y||!f))return V.createPortal(e.jsx(G,{lockScroll:!0,className:F,children:e.jsx(H,{context:r,initialFocus:i?0:-1,children:e.jsx("dialog",{ref:j.setFloating,"aria-labelledby":E,"aria-describedby":D,className:N,open:!0,style:B,...A(),children:e.jsx(Q,{className:h,...O,children:e.jsxs("div",{className:L,children:[d&&e.jsx(s,{type:"button",onClick:()=>{a(!1)},color:"main",variant:"ghost",size:"sm",className:"absolute top-2 right-2",startIcon:e.jsx(X,{strokeWidth:2,className:"size-6"})}),C]})})})})}),f)}const{expect:v,within:x}=__STORYBOOK_MODULE_TEST__,de={title:"Components/Dialog",tags:["autodocs"],component:l,decorators:i=>e.jsx("div",{className:"storybookContainer",children:e.jsx(i,{})}),argTypes:{}},u={play:async({canvasElement:i})=>{const a=x(i).getByTestId("default");await v(a,"renders").toBeTruthy()},render:i=>{const[t,a]=o.useState(i.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>a(!0),"data-testid":"default",children:"open dialog"}),e.jsxs(l,{isOpen:t,setIsOpen:a,size:"md",children:[e.jsx(c,{children:"Lorem, ipsum dolor."}),e.jsx(p,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),e.jsx(q,{className:"flex w-full flex-row justify-end",children:e.jsxs(P,{children:[e.jsx(z,{children:e.jsx(s,{onClick:()=>a(!1),children:"close"})}),e.jsx(_,{children:"Close"})]})})]})]})}},m={play:async({canvasElement:i})=>{const a=x(i).getByTestId("default");await v(a,"renders").toBeTruthy()},render:i=>{const[t,a]=o.useState(i.isOpen),[d,n]=o.useState(i.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>a(!0),"data-testid":"default",children:"open dialog"}),"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem sint in illum consequatur reprehenderit reiciendis nostrum, fugiat ullam modi distinctio nihil, fuga corporis dolor magni ex minus obcaecati adipisci fugit soluta maxime accusantium delectus ipsam molestiae veniam? Est ipsam placeat atque recusandae tenetur veritatis deleniti, animi omnis provident obcaecati distinctio cupiditate ea incidunt odio sapiente eos a eaque voluptate veniam ab nemo. Consequuntur adipisci eveniet vero repudiandae, blanditiis id molestias aliquam, temporibus, voluptatibus iusto eaque eius? Fuga voluptatum molestias neque quasi doloribus, nobis esse animi perspiciatis ad id commodi est! Cum et quidem deleniti officiis velit sed autem? Accusamus aut numquam iure laudantium corporis sint sapiente non facere, consequatur harum repudiandae, maiores eligendi doloremque. Quibusdam ex eaque eum. Veritatis, ipsa nostrum incidunt placeat velit eveniet cupiditate. In quis perferendis enim at assumenda alias mollitia modi dolor earum ducimus tempora libero a laudantium sit iusto tenetur facere veniam corporis, impedit, aspernatur aliquid aperiam ipsum. Blanditiis, est impedit assumenda exercitationem maiores, quas debitis perferendis quasi provident repellendus dicta fuga ipsum? Repudiandae, quam. Commodi explicabo dolorem nihil voluptatem cupiditate repudiandae sequi quasi earum laboriosam animi. Dicta illum sed numquam excepturi, beatae nostrum pariatur architecto eveniet quam non laboriosam, id reprehenderit? Quibusdam iure, alias, quae sequi pariatur eius amet aliquam deserunt doloribus soluta nobis omnis dignissimos unde id animi, inventore eveniet libero harum nisi ipsum vel recusandae. Provident eligendi quidem expedita libero quas nesciunt aspernatur id veritatis necessitatibus doloribus nulla impedit omnis ipsam laudantium eius dignissimos sit, aperiam, consequatur placeat minus, quo laborum perferendis porro ratione! Ex eos, provident, facilis maxime nisi vel reprehenderit sit repellat sapiente tempore quaerat perspiciatis placeat quos esse a, officia inventore ullam quod earum velit odio saepe et quo fugit! Amet deleniti vero mollitia quasi ad facere vitae doloribus vel est ipsum suscipit delectus excepturi expedita minima et tenetur fugit maiores animi dicta cum, molestiae rem commodi? Amet sit dolores laudantium beatae dolorum aspernatur est nemo, eius sed quis, autem hic aut saepe repudiandae enim et doloremque necessitatibus provident architecto numquam ad corrupti, reiciendis exercitationem ratione? Nam enim deleniti, corrupti dolore, voluptates, molestiae odit quibusdam fuga obcaecati hic autem dicta. Cumque voluptatem laboriosam animi commodi dignissimos porro dolores nam facere quo amet quod, esse deserunt earum, illum, itaque officiis iure repudiandae vel ullam. Vitae, pariatur temporibus delectus exercitationem nobis ratione minus repudiandae illum rerum? Commodi alias ratione velit veniam, magnam et esse sapiente officiis quidem? Ullam delectus beatae et.",e.jsxs(l,{isOpen:t,setIsOpen:a,size:"md",children:[e.jsx(c,{children:"Lorem, ipsum dolor."}),e.jsx(p,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),e.jsxs(q,{className:"flex w-full flex-row justify-between",children:[e.jsx(s,{onClick:()=>n(!0),children:"open second"}),e.jsx(s,{onClick:()=>a(!1),children:"close"})]}),e.jsxs(l,{hasInitialFocus:!1,isOpen:d,setIsOpen:n,size:"xl",children:[e.jsx(c,{children:"Lorem, ipsum dolor."}),e.jsx(p,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe impedit quas ratione blanditiis commodi! Quae, accusantium a suscipit praesentium ad quisquam, provident aspernatur ducimus perferendis pariatur aliquid ullam mollitia? Porro fuga corporis commodi impedit cupiditate neque magnam officiis quo consequatur! Ipsam incidunt, doloribus et modi provident aut minima sequi est maxime. Praesentium quasi ducimus similique at temporibus quo? Quidem quae vero eos veritatis magni dignissimos fugiat libero laboriosam eligendi minus facere fuga eius, unde excepturi facilis? Nostrum sunt quibusdam hic. Illum, debitis necessitatibus! Quo rem incidunt beatae veniam saepe iure architecto, voluptatem facilis est veritatis ullam amet ea fuga error cumque laborum. Eum fugit molestias, quisquam quia, dolor, ipsam sunt quos consectetur recusandae voluptates iure eos quam provident culpa asperiores ea numquam repellendus aut in! Aperiam debitis quod tempore, eveniet reiciendis iusto quae pariatur architecto! Molestias esse provident blanditiis ipsa eveniet totam veritatis unde repellat perferendis facere dolor odio tempore obcaecati deleniti, ex quibusdam, corporis quae ratione, reprehenderit qui iusto. Animi modi minus autem maxime itaque ipsam repudiandae hic quisquam a facere, commodi possimus ipsa optio ex ducimus dolore similique laborum eaque deleniti totam? Cupiditate illo iure molestiae modi quasi excepturi magni dolore eum temporibus. Veniam incidunt quos ipsam alias."}),e.jsx(q,{className:"flex w-full flex-row justify-end",children:e.jsx(s,{onClick:()=>n(!1),children:"Close second"})})]})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("default");
    await expect(button, "renders").toBeTruthy();
  },
  render: props => {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    return <>\r
        <Button onClick={() => setIsOpen(true)} data-testid="default">\r
          open dialog\r
        </Button>\r
        <Dialog isOpen={isOpen} setIsOpen={setIsOpen} size="md">\r
          <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
          <CardText>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!\r
          </CardText>\r
          <CardActions className="flex w-full flex-row justify-end">\r
            <Tooltip>\r
              <TooltipTrigger>\r
                <Button onClick={() => setIsOpen(false)}>close</Button>\r
              </TooltipTrigger>\r
              <TooltipContent>Close</TooltipContent>\r
            </Tooltip>\r
          </CardActions>\r
        </Dialog>\r
      </>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("default");
    await expect(button, "renders").toBeTruthy();
  },
  render: props => {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    const [isOpenSecond, setIsOpenSecond] = useState(props.isOpen);
    return <>\r
        <Button onClick={() => setIsOpen(true)} data-testid="default">\r
          open dialog\r
        </Button>\r
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem\r
        sint in illum consequatur reprehenderit reiciendis nostrum, fugiat ullam\r
        modi distinctio nihil, fuga corporis dolor magni ex minus obcaecati\r
        adipisci fugit soluta maxime accusantium delectus ipsam molestiae\r
        veniam? Est ipsam placeat atque recusandae tenetur veritatis deleniti,\r
        animi omnis provident obcaecati distinctio cupiditate ea incidunt odio\r
        sapiente eos a eaque voluptate veniam ab nemo. Consequuntur adipisci\r
        eveniet vero repudiandae, blanditiis id molestias aliquam, temporibus,\r
        voluptatibus iusto eaque eius? Fuga voluptatum molestias neque quasi\r
        doloribus, nobis esse animi perspiciatis ad id commodi est! Cum et\r
        quidem deleniti officiis velit sed autem? Accusamus aut numquam iure\r
        laudantium corporis sint sapiente non facere, consequatur harum\r
        repudiandae, maiores eligendi doloremque. Quibusdam ex eaque eum.\r
        Veritatis, ipsa nostrum incidunt placeat velit eveniet cupiditate. In\r
        quis perferendis enim at assumenda alias mollitia modi dolor earum\r
        ducimus tempora libero a laudantium sit iusto tenetur facere veniam\r
        corporis, impedit, aspernatur aliquid aperiam ipsum. Blanditiis, est\r
        impedit assumenda exercitationem maiores, quas debitis perferendis quasi\r
        provident repellendus dicta fuga ipsum? Repudiandae, quam. Commodi\r
        explicabo dolorem nihil voluptatem cupiditate repudiandae sequi quasi\r
        earum laboriosam animi. Dicta illum sed numquam excepturi, beatae\r
        nostrum pariatur architecto eveniet quam non laboriosam, id\r
        reprehenderit? Quibusdam iure, alias, quae sequi pariatur eius amet\r
        aliquam deserunt doloribus soluta nobis omnis dignissimos unde id animi,\r
        inventore eveniet libero harum nisi ipsum vel recusandae. Provident\r
        eligendi quidem expedita libero quas nesciunt aspernatur id veritatis\r
        necessitatibus doloribus nulla impedit omnis ipsam laudantium eius\r
        dignissimos sit, aperiam, consequatur placeat minus, quo laborum\r
        perferendis porro ratione! Ex eos, provident, facilis maxime nisi vel\r
        reprehenderit sit repellat sapiente tempore quaerat perspiciatis placeat\r
        quos esse a, officia inventore ullam quod earum velit odio saepe et quo\r
        fugit! Amet deleniti vero mollitia quasi ad facere vitae doloribus vel\r
        est ipsum suscipit delectus excepturi expedita minima et tenetur fugit\r
        maiores animi dicta cum, molestiae rem commodi? Amet sit dolores\r
        laudantium beatae dolorum aspernatur est nemo, eius sed quis, autem hic\r
        aut saepe repudiandae enim et doloremque necessitatibus provident\r
        architecto numquam ad corrupti, reiciendis exercitationem ratione? Nam\r
        enim deleniti, corrupti dolore, voluptates, molestiae odit quibusdam\r
        fuga obcaecati hic autem dicta. Cumque voluptatem laboriosam animi\r
        commodi dignissimos porro dolores nam facere quo amet quod, esse\r
        deserunt earum, illum, itaque officiis iure repudiandae vel ullam.\r
        Vitae, pariatur temporibus delectus exercitationem nobis ratione minus\r
        repudiandae illum rerum? Commodi alias ratione velit veniam, magnam et\r
        esse sapiente officiis quidem? Ullam delectus beatae et.\r
        <Dialog isOpen={isOpen} setIsOpen={setIsOpen} size="md">\r
          <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
          <CardText>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!\r
          </CardText>\r
          <CardActions className="flex w-full flex-row justify-between">\r
            <Button onClick={() => setIsOpenSecond(true)}>open second</Button>\r
            <Button onClick={() => setIsOpen(false)}>close</Button>\r
          </CardActions>\r
          <Dialog hasInitialFocus={false} isOpen={isOpenSecond} setIsOpen={setIsOpenSecond} size="xl">\r
            <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
            <CardText>\r
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe\r
              impedit quas ratione blanditiis commodi! Quae, accusantium a\r
              suscipit praesentium ad quisquam, provident aspernatur ducimus\r
              perferendis pariatur aliquid ullam mollitia? Porro fuga corporis\r
              commodi impedit cupiditate neque magnam officiis quo consequatur!\r
              Ipsam incidunt, doloribus et modi provident aut minima sequi est\r
              maxime. Praesentium quasi ducimus similique at temporibus quo?\r
              Quidem quae vero eos veritatis magni dignissimos fugiat libero\r
              laboriosam eligendi minus facere fuga eius, unde excepturi\r
              facilis? Nostrum sunt quibusdam hic. Illum, debitis\r
              necessitatibus! Quo rem incidunt beatae veniam saepe iure\r
              architecto, voluptatem facilis est veritatis ullam amet ea fuga\r
              error cumque laborum. Eum fugit molestias, quisquam quia, dolor,\r
              ipsam sunt quos consectetur recusandae voluptates iure eos quam\r
              provident culpa asperiores ea numquam repellendus aut in! Aperiam\r
              debitis quod tempore, eveniet reiciendis iusto quae pariatur\r
              architecto! Molestias esse provident blanditiis ipsa eveniet totam\r
              veritatis unde repellat perferendis facere dolor odio tempore\r
              obcaecati deleniti, ex quibusdam, corporis quae ratione,\r
              reprehenderit qui iusto. Animi modi minus autem maxime itaque\r
              ipsam repudiandae hic quisquam a facere, commodi possimus ipsa\r
              optio ex ducimus dolore similique laborum eaque deleniti totam?\r
              Cupiditate illo iure molestiae modi quasi excepturi magni dolore\r
              eum temporibus. Veniam incidunt quos ipsam alias.\r
            </CardText>\r
            <CardActions className="flex w-full flex-row justify-end">\r
              <Button onClick={() => setIsOpenSecond(false)}>\r
                Close second\r
              </Button>\r
            </CardActions>\r
          </Dialog>\r
        </Dialog>\r
      </>;
  }
}`,...m.parameters?.docs?.source}}};const ce=["Default","BigText"];export{m as BigText,u as Default,ce as __namedExportsOrder,de as default};
