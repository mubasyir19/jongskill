import { API_BASE_URL } from '@/config/constant';

export const login = async ({ email, password }: { email: string; password: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        status: response.status,
        error: data.message || 'Login failed',
      };
    }

    return data;
  } catch (error) {
    return {
      status: 500,
      error: error?.message || 'Something went wrong',
    };
  }
};

export const forgotPassword = async ({ email }: { email: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        status: response.status,
        error: data.message || 'Request failed',
      };
    }

    return data;
  } catch (error) {
    return {
      status: 500,
      error: error?.message || 'Something went wrong',
    };
  }
};

export const verifyOTP = async ({ email, otp }: { email: string; otp: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        status: response.status,
        error: data.message || 'Verify failed',
      };
    }

    return data;
  } catch (error) {
    return {
      status: 500,
      error: error?.message || 'Something went wrong',
    };
  }
};

export const resetPassword = async ({ email, newPassword }: { email: string; newPassword: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, newPassword }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        status: response.status,
        error: data.message || 'Reset failed',
      };
    }

    return data;
  } catch (error) {
    return {
      status: 500,
      error: error?.message || 'Something went wrong',
    };
  }
};
