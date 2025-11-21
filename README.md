This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<div className="makePayment w-1/2 bg-violet-950 p-10 rounded-md text-white">
          <h2 className="text-2xl font-bold my-5"> Make Payment</h2>
          <div className="flex gap-2 flex-col">
            {/* input name and message */}
            <div className="mb-2">
              <input
                type="text"
                placeholder="Enter Name"
                className="bg-violet-950 border w-full mb-2 p-2 rounded-md text-black "
              />
              <input
                type="text"
                placeholder="Enter Message"
                className=" bg-violet-950 border w-full  mb-2 p-2 rounded-md text-black"
              />
              <input
                type="number"
                placeholder="Enter Amount"
                className="bg-violet-950 border w-full p-2 mb-2 rounded-md text-black"
              />
              <button
              onClick={goToPayment}
                type="button"
                className=" w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pay
              </button>
            </div>
          </div>
          {/* or choose from these amounts */}
          <div className="flex gap-2 my-5">
            <button className=" border p-2 rounded-md">$10</button>
            <button className="border p-2 rounded-md">$20</button>
            <button className="border p-2 rounded-md">$50</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
