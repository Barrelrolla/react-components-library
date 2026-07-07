import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { Dialog } from "./Dialog";
import { useState } from "react";
import { Button } from "../Button";
import { Card, CardActions, CardText, CardTitle } from "../Card";

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
    const [isOpenSecond, setIsOpenSecond] = useState(props.isOpen);
    return (
      <>
        <Button onClick={() => setIsOpen(true)} data-testid="default">
          open dialog
        </Button>
        <Dialog isOpen={isOpen} setIsOpen={setIsOpen}>
          <Card containerClasses="@container-normal">
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
            <Card containerClasses="@container-normal" size="xl">
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
              <CardActions className="flex w-full flex-row justify-between">
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
