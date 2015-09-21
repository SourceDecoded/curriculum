# Abstraction
A crucial part of your progress is your journey from the Concrete to the Abstract. For our purposes, "Concrete" deals with "things which actually exist" and "Abstract" describes ideas which wrap up a set of concrete things. With abstractions, we can think about systems with many pieces in terms of just a few, or make an idea reusable in multiple different situations. Concrete is also sometimes used to describe things that a person understands, and abstract to describe something incomprehensible, but this is a false definition in software.

## Layers
Everything is made out of something. This is true in the real world, as well as in the software world. Have you ever indulged a 7-year-old who keeps asking, "why"? Just as that line of questioning never really ends, neither do the ones consisting of, "what is that made out of?" or "how does that work?".

Think about a car. What's it made out of? A body, drivetrain, safety systems, etc. What's the drivetrain made out of? The engine, transmission, axles, and wheels. What's the transmission made out of? Gears and shafts bathed in oil. What are the gears made out of? Probably steel. What's steel made out of? Iron, carbon, and some other elements. What's iron made from? ..and so on...

At every level of that chain is an idea which is used to make sense of the next idea up. When we talk about drivetrains, we usually talk about the transmission, not the gears in the transmission. The gears become important only when we're talking about the transmission itself.

Software (most of computer science, really) works the same way. What's an operating system made out of? What are those pieces made out of? And those? And those?

Software works on so many different levels because we organized it that way. We organized it that way because we can only hold so much in our heads at once. It's probably possible to build a modern operating system without trying to build it in smaller pieces and put it together at the end, but not for any mortal human.

So, what we do is break large problems in to collections of small ones, then solve those. Many times, writing software feels like that movie, Inception, where you have to go down three or four levels and work up from there. Finally solving your original problem feels like waking up from nested dreams.

## Concrete
It was mentioned that "concrete" deals with things that actually exist. That's true, sort of.

If you choose any layer and ask, "What's real on this layer?", the answer will only be true for that layer. If you dig down a layer, anything that was real on the layer above is only a composition of pieces from the layer below. In other words, what looks real on this layer can always get broken down to smaller pieces. Since we only deal with a single layer at a time, we can get away with calling things "concrete" which really aren't. In the next chapter, we'll talk about the lowest levels of software and build reality from there.

## Abstract
A transmission is an abstraction over gears, shafts, and oil. When you start building a transmission, the thing doesn't actually exist, except as an idea in your head. Only once it's built does it become a concrete piece on which more can be built.

Abstraction in software works the same way - a state machine is an abstraction over conditionals which makes reasoning about them easier. A user interface is an abstraction over UI elements, composed in a particular way. A device driver is an abstraction over a collection of hardware I/O operations.

We tend to move from concrete to abstract as we build things, because abstractions (generally should) make it easier for us to do our work. If you are an application developer, you don't really want to keep thinking about how to deal with text input every time your application calls for it. It's much nicer for you to to just have a text input element in your toolbox that you can drop in. If your application deals with person data a lot, you're probably going to collect a bunch of inputs into a "person form" which you can just drop in anywhere you deal with editing person data.

There is a danger of going off the abstraction deep-end. There is an appropriate level of abstraction for any problem, surrounded on either side by inappropriate concreteness and abstraction. With experience, and using tools we'll present in this guide, you'll be able to identify all three levels.

## Composition
Using the concrete pieces given (on any layer), we build new things. There are no houses growing in the forest, but we can take the trees and turn them into houses. As programmers, our job is to take an idea and figure out how to build it from the available materials.

In software, you'll probably specialize on a particular layer. If you're a user interface developer, you'll build application interfaces out of available user interface elements. If you write data services, you'll build them from pieces provided by the layer below you. Collecting concrete pieces into larger, abstract, pieces is called composition. Your job is to compose concrete elements to express abstract ideas, which them become the foundation for more pieces.

The next chapter will establish the most concrete layers of software and build up from there, so you understand where your tools come from and get an idea of how one thing builds upon another.
