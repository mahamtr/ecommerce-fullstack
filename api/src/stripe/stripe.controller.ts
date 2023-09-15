import { Controller, Post, Redirect, Res } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { Response } from 'express';

const stripe = require('stripe')(process.env.STRIPE_KEY);

@Controller('Stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {
  }

  @Post("StartSession")
    async StartSession() {
    
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1Npcw2DS172oNV0b6MLPUOow',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${'http://localhost:4000/'}?success=true`,
        cancel_url: `${'http://localhost:4000/'}?canceled=true`,
      });

      return {url: session.url};
    }
}
