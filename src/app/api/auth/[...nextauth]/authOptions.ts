import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { AuthOptions, User } from "next-auth";
import axios from "axios";




interface ExtendedUser extends User {
    token?: string;
    message?: string;
  }
  
  declare module "next-auth" {
    interface Session {
      accessToken?: string;
      message?: string;
    }
  }
  
  declare module "next-auth/jwt" {
    interface JWT {
      accessToken?: string;
      message?: string;
    }
  }


export const authOptions: AuthOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          try {
            console.log('Attempting login with credentials:', {
              email: credentials?.email,
              password: credentials?.password ? '[HIDDEN]' : undefined
            });
  
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/login`,
              {
                email: credentials?.email,
                password: credentials?.password,
              }
            );
  
            console.log('Auth response:', response.data);
  
            if (response.data) {
              return {
                id: response.data.id || response.data.user_id,
                email: credentials?.email,
                token: response.data.token,
                ...response.data
              };
            }
            throw new Error('Invalid credentials');
          } catch (error: any) {
            console.error('Auth error:', error.response?.data || error);
            throw new Error(error.response?.data?.message || 'Authentication failed');
          }
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          return {
            ...token,
            ...user,
          };
        }
        return token;
      },
      async session({ session, token }) {
        return {
          ...session,
          user: {
            ...session.user,
            ...token,
          }
        };
      },
    },
    pages: {
      signIn: '/login',
    },
    debug: true,
    secret: process.env.NEXTAUTH_SECRET,
  };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };