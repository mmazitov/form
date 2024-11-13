import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.create({
		data: {
			email: 'mail@gmail.com',
			password: 'password',
			name: 'John Doe',
		},
	});
	console.log(user);
}

main();
