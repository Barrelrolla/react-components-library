import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { useState } from "react";
import { Card, CardActions, CardText, CardTitle } from "../Card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";
import { Button } from "../Button";
import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  tags: ["autodocs"],
  component: Dialog,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("default");
    await expect(button, "renders").toBeTruthy();
  },
  render: (props) => {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    return (
      <>
        <Button onClick={() => setIsOpen(true)} data-testid="default">
          open dialog
        </Button>
        <Dialog isOpen={isOpen} setIsOpen={setIsOpen}>
          <Card size="md">
            <CardTitle>Lorem, ipsum dolor.</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!
            </CardText>
            <CardActions className="flex w-full flex-row justify-end">
              <Tooltip>
                <TooltipTrigger>
                  <Button onClick={() => setIsOpen(false)}>close</Button>
                </TooltipTrigger>
                <TooltipContent>Close</TooltipContent>
              </Tooltip>
            </CardActions>
          </Card>
        </Dialog>
      </>
    );
  },
};

export const BigText: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("default");
    await expect(button, "renders").toBeTruthy();
  },
  render: (props) => {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    const [isOpenSecond, setIsOpenSecond] = useState(props.isOpen);
    return (
      <>
        <Button onClick={() => setIsOpen(true)} data-testid="default">
          open dialog
        </Button>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        sint in illum consequatur reprehenderit reiciendis nostrum, fugiat ullam
        modi distinctio nihil, fuga corporis dolor magni ex minus obcaecati
        adipisci fugit soluta maxime accusantium delectus ipsam molestiae
        veniam? Est ipsam placeat atque recusandae tenetur veritatis deleniti,
        animi omnis provident obcaecati distinctio cupiditate ea incidunt odio
        sapiente eos a eaque voluptate veniam ab nemo. Consequuntur adipisci
        eveniet vero repudiandae, blanditiis id molestias aliquam, temporibus,
        voluptatibus iusto eaque eius? Fuga voluptatum molestias neque quasi
        doloribus, nobis esse animi perspiciatis ad id commodi est! Cum et
        quidem deleniti officiis velit sed autem? Accusamus aut numquam iure
        laudantium corporis sint sapiente non facere, consequatur harum
        repudiandae, maiores eligendi doloremque. Quibusdam ex eaque eum.
        Veritatis, ipsa nostrum incidunt placeat velit eveniet cupiditate. In
        quis perferendis enim at assumenda alias mollitia modi dolor earum
        ducimus tempora libero a laudantium sit iusto tenetur facere veniam
        corporis, impedit, aspernatur aliquid aperiam ipsum. Blanditiis, est
        impedit assumenda exercitationem maiores, quas debitis perferendis quasi
        provident repellendus dicta fuga ipsum? Repudiandae, quam. Commodi
        explicabo dolorem nihil voluptatem cupiditate repudiandae sequi quasi
        earum laboriosam animi. Dicta illum sed numquam excepturi, beatae
        nostrum pariatur architecto eveniet quam non laboriosam, id
        reprehenderit? Quibusdam iure, alias, quae sequi pariatur eius amet
        aliquam deserunt doloribus soluta nobis omnis dignissimos unde id animi,
        inventore eveniet libero harum nisi ipsum vel recusandae. Provident
        eligendi quidem expedita libero quas nesciunt aspernatur id veritatis
        necessitatibus doloribus nulla impedit omnis ipsam laudantium eius
        dignissimos sit, aperiam, consequatur placeat minus, quo laborum
        perferendis porro ratione! Ex eos, provident, facilis maxime nisi vel
        reprehenderit sit repellat sapiente tempore quaerat perspiciatis placeat
        quos esse a, officia inventore ullam quod earum velit odio saepe et quo
        fugit! Amet deleniti vero mollitia quasi ad facere vitae doloribus vel
        est ipsum suscipit delectus excepturi expedita minima et tenetur fugit
        maiores animi dicta cum, molestiae rem commodi? Amet sit dolores
        laudantium beatae dolorum aspernatur est nemo, eius sed quis, autem hic
        aut saepe repudiandae enim et doloremque necessitatibus provident
        architecto numquam ad corrupti, reiciendis exercitationem ratione? Nam
        enim deleniti, corrupti dolore, voluptates, molestiae odit quibusdam
        fuga obcaecati hic autem dicta. Cumque voluptatem laboriosam animi
        commodi dignissimos porro dolores nam facere quo amet quod, esse
        deserunt earum, illum, itaque officiis iure repudiandae vel ullam.
        Vitae, pariatur temporibus delectus exercitationem nobis ratione minus
        repudiandae illum rerum? Commodi alias ratione velit veniam, magnam et
        esse sapiente officiis quidem? Ullam delectus beatae et.
        <Dialog isOpen={isOpen} setIsOpen={setIsOpen}>
          <Card size="md">
            <CardTitle>Lorem, ipsum dolor.</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!
            </CardText>
            <CardActions className="flex w-full flex-row justify-between">
              <Button onClick={() => setIsOpenSecond(true)}>open second</Button>
              <Button onClick={() => setIsOpen(false)}>close</Button>
            </CardActions>
          </Card>
          <Dialog isOpen={isOpenSecond} setIsOpen={setIsOpenSecond}>
            <Card
              className="max-h-[calc(100vh-2.2rem)] overflow-x-auto"
              size="xl"
            >
              <CardTitle>Lorem, ipsum dolor.</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                impedit quas ratione blanditiis commodi! Quae, accusantium a
                suscipit praesentium ad quisquam, provident aspernatur ducimus
                perferendis pariatur aliquid ullam mollitia? Porro fuga corporis
                commodi impedit cupiditate neque magnam officiis quo
                consequatur! Ipsam incidunt, doloribus et modi provident aut
                minima sequi est maxime. Praesentium quasi ducimus similique at
                temporibus quo? Quidem quae vero eos veritatis magni dignissimos
                fugiat libero laboriosam eligendi minus facere fuga eius, unde
                excepturi facilis? Nostrum sunt quibusdam hic. Illum, debitis
                necessitatibus! Quo rem incidunt beatae veniam saepe iure
                architecto, voluptatem facilis est veritatis ullam amet ea fuga
                error cumque laborum. Eum fugit molestias, quisquam quia, dolor,
                ipsam sunt quos consectetur recusandae voluptates iure eos quam
                provident culpa asperiores ea numquam repellendus aut in!
                Aperiam debitis quod tempore, eveniet reiciendis iusto quae
                pariatur architecto! Molestias esse provident blanditiis ipsa
                eveniet totam veritatis unde repellat perferendis facere dolor
                odio tempore obcaecati deleniti, ex quibusdam, corporis quae
                ratione, reprehenderit qui iusto. Animi modi minus autem maxime
                itaque ipsam repudiandae hic quisquam a facere, commodi possimus
                ipsa optio ex ducimus dolore similique laborum eaque deleniti
                totam? Cupiditate illo iure molestiae modi quasi excepturi magni
                dolore eum temporibus. Veniam incidunt quos ipsam alias.
              </CardText>
              <CardActions className="flex w-full flex-row justify-end">
                <Button onClick={() => setIsOpenSecond(false)}>
                  Close second
                </Button>
              </CardActions>
            </Card>
          </Dialog>
        </Dialog>
      </>
    );
  },
};
